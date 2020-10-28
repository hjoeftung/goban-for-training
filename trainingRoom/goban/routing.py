from django.urls import re_path

from . import consumers


websocket_urlpatterns = [
    re_path(r"game/(?P<room_name>\[wd]+)", consumers.MoveConsumer.as_asgi()),
]