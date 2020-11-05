import json

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from .models import Game


class GameConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["game_id"]
        self.room_group_name = f"game_{self.room_name}"
        self.game = Game.objects.get(game_id=self.room_name)
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
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        text_data_json = json.loads(text_data)

        if "action" in text_data_json:
            if text_data_json["action"] == "name":
                name = text_data_json["payload"]["newName"]

                async_to_sync(self.channel_layer.group_send)(
                    self.room_group_name,
                    {
                        "type": "name",
                        "payload": name
                    })

            elif text_data_json["action"] == "seat":
                payload = text_data_json["payload"]

                async_to_sync(self.channel_layer.group_send)(
                    self.room_group_name,
                    {
                        "type": "seat",
                        "payload": payload
                    })

            elif text_data_json["action"] == "move":
                color = text_data_json["payload"]["color"]
                coords = text_data_json["payload"]["coords"]

                async_to_sync(self.channel_layer.group_send)(
                    self.room_group_name,
                    {
                        "type": "move",
                        "payload": {"color": color, "coords": coords}
                    })

            elif text_data_json["action"] == "revert":
                async_to_sync(self.channel_layer.group_send)(
                    self.room_group_name, {"type": "revert"}
                )

    def get_game_info(self):
        return {"size": self.game.board_size,
                "handicap": self.game.handicap,
                "preset": self.game.preset,
                "log": self.game.kifu,
                "players": {"black": self.game.player_black,
                            "white": self.game.player_white}}

    def name(self, event):
        name = event["payload"]

        self.send(text_data=json.dumps({
            "action": "name",
            "payload": name
        }))

    def seat(self, event):
        payload = event["payload"]

        self.send(text_data=json.dumps({
            "action": "seat",
            "payload": payload
        }))

    def move(self, event):
        move = event["payload"]

        self.send(text_data=json.dumps({
            "action": "move",
            "payload": move
        }))

    def revert(self, event):
        self.send(text_data=json.dumps({"action": "revert"}))
