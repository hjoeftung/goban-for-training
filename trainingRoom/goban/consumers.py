import json

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from .models import Game


class GameConsumer(WebsocketConsumer):
    def connect(self):
        self.user = self.scope["user"]
        self.room_name = self.scope["url_route"]["kwargs"]["game_id"]
        self.room_group_name = f"game_{self.room_name}"

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()
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
        actions = ["name", "seat", "move", "revert", "confirm"]

        if "action" in text_data_json and text_data_json["action"] in actions:
            action = text_data_json["action"]

            if "payload" in text_data_json:
                payload = text_data_json["payload"]
                async_to_sync(self.channel_layer.group_send)(
                    self.room_group_name,
                    {
                        "type": action,
                        "payload": payload,
                        "sender_channel_name": self.channel_name
                    })
            else:
                async_to_sync(self.channel_layer.group_send)(
                    self.room_group_name,
                    {
                        "type": action,
                        "sender_channel_name": self.channel_name
                    })

    def get_game_info(self):
        self.game = Game.objects.get(game_id=self.room_name)
        return {"size": self.game.board_size,
                "handicap": self.game.handicap,
                "preset": self.game.preset,
                "log": self.game.kifu,
                "players": {"black": self.game.player_black,
                            "white": self.game.player_white}}

    def name(self, event):
        name = event["payload"]

        if self.channel_name != event["sender_channel_name"]:
            self.send(text_data=json.dumps({
                "action": "name",
                "payload": name
            }))

    def seat(self, event):
        payload = event["payload"]

        if self.channel_name != event["sender_channel_name"]:
            self.send(text_data=json.dumps({
                "action": "seat",
                "payload": payload
            }))

        if payload["color"] == "black":
            self.game.player_black = payload["name"]
        else:
            self.game.player_white = payload["name"]

        self.save_changes()
        print(f"black: {self.game.player_black}",
              f"white: {self.game.player_white}")

    def move(self, event):
        move = event["payload"]

        if self.channel_name != event["sender_channel_name"]:
            self.send(text_data=json.dumps({
                "action": "move",
                "payload": move
            }))

        self.game.kifu.append(move)
        self.save_changes()
        print(self.game.kifu)

    def revert(self, event):
        if self.channel_name != event["sender_channel_name"]:
            self.send(text_data=json.dumps({"action": "revert"}))

    def confirm(self, event):
        if self.channel_name != event["sender_channel_name"]:
            self.send(text_data=json.dumps({"action": "confirm"}))

        self.game.kifu.pop()
        self.save_changes()

    def save_changes(self):
        self.game.save()