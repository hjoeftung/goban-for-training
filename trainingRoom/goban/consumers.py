import json

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer


class MoveConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['game_id']
        self.room_group_name = f'game_{self.room_name}'

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        move = text_data_json['move']

        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'move',
                'move': move
            }
        )

        self.send(text_data=json.dumps({
            'move': move
        }))

    def move(self, event):
        move = event['move']

        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'move': move
        }))