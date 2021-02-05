import json
import logging
import sys

from string import ascii_lowercase

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from .models import Game


logger = logging.getLogger(__name__)

logging.basicConfig(
    format="%(asctime)s %(levelname)s:%(name)s: %(message)s",
    level=logging.DEBUG,
    datefmt="%d-%b-%y %H:%M:%S",
    stream=sys.stdout,
)

# These coordinates mappings are used in GameConsumer.encode_move and
# GameConsumer.decode_move respectively.
coords_for_encoding = {idx + 1: letter for idx, letter in enumerate(ascii_lowercase)}
coords_for_decoding = {letter: idx + 1 for idx, letter in enumerate(ascii_lowercase)}


class GameConsumer(WebsocketConsumer):
    def connect(self):
        logger.debug(f"scope: {self.scope}")
        self.user = self.scope["user"]
        self.room_name = self.scope["url_route"]["kwargs"]["game_id"]
        self.room_group_name = f"game_{self.room_name}"

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()

        # Send initial / current info about the game
        self.send(text_data=json.dumps({
            "action": "connection",
            "payload": self.get_game_info()}))

    def disconnect(self, close_code):
        self.save_changes()
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        actions = ["name", "seat", "leave", "move", "revert", "confirm"]

        if "action" in text_data_json and text_data_json["action"] in actions:
            action = text_data_json["action"]

            if "payload" in text_data_json:
                payload = text_data_json["payload"]
                async_to_sync(self.channel_layer.group_send)(
                    self.room_group_name,
                    {
                        "type": action,
                        "payload": payload,
                        "channel_name": self.channel_name
                    })
            else:
                async_to_sync(self.channel_layer.group_send)(
                    self.room_group_name,
                    {
                        "type": action,
                        "channel_name": self.channel_name
                    })

    def get_game_info(self):
        self.game = Game.objects.get(game_id=self.room_name)
        logger.debug(self.decode_kifu(self.game.kifu))

        return {"size": self.game.board_size,
                "handicap": self.game.handicap,
                "preset": self.game.preset,
                "log": self.decode_kifu(self.game.kifu),
                "players": {"black": self.game.player_black,
                            "white": self.game.player_white}}

    def name(self, event):
        name = event["payload"]

        if self.channel_name != event["channel_name"]:
            self.send(text_data=json.dumps({
                "action": "name",
                "payload": name
            }))

    def seat(self, event):
        payload = event["payload"]

        if self.channel_name != event["channel_name"]:
            self.send(text_data=json.dumps({
                "action": "seat",
                "payload": payload
            }))

        if payload["color"] == "black":
            self.game.player_black = payload["name"]
        else:
            self.game.player_white = payload["name"]

        self.save_changes()

    def leave(self, event):
        payload = event["payload"]

        if self.channel_name != event["channel_name"]:
            self.send(text_data=json.dumps({
                "action": "leave",
                "payload": payload
            }))

        if payload["color"] == "black":
            self.game.player_black = ""
        else:
            self.game.player_white = ""

    def move(self, event):
        move = event["payload"]

        if self.channel_name != event["channel_name"]:
            self.send(text_data=json.dumps({
                "action": "move",
                "payload": move
            }))

        if self.game.kifu:
            self.game.kifu += f", {self.encode_move(move)}"
        else:
            self.game.kifu = self.encode_move(move)

        self.save_changes()

    def revert(self, event):
        if self.channel_name != event["channel_name"]:
            self.send(text_data=json.dumps({"action": "revert"}))

    def confirm(self, event):
        self.send(text_data=json.dumps({"action": "confirm"}))

    def save_changes(self):
        self.game.save()

    @staticmethod
    def encode_move(move: dict) -> str:
        if move:
            color = "B" if move["color"] == "black" else "W"
            row = move["coords"]["row"]
            column = move["coords"]["cell"]
            return f"{color}{coords_for_encoding[row]}{coords_for_encoding[column]}"
        else:
            return ""

    @staticmethod
    def decode_move(move: str) -> dict:
        if move:
            color = "black" if move[0] == "B" else "white"
            row = coords_for_decoding[move[1]]
            column = coords_for_decoding[move[2]]
            return {"color": color, "coords": {"row": row, "cell": column}}

        else:
            return {}

    def decode_kifu(self, kifu):
        if kifu:
            kifu_to_list = kifu.split(", ")
            return [self.decode_move(move) for move in kifu_to_list]
        else:
            return ""
