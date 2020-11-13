import hashlib
from datetime import datetime
import json

from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from .models import Game
from django.views.generic.base import TemplateView


class MainView(View):

    def get(self, request, *args, **kwargs):
        return render(request, 'goban/starting_page.html')

    def post(self, request, *args, **kwargs):
        game_id = self.generate_id()
        request_dict = json.loads(request.body.decode())
        board_size = int(request_dict["size"])
        handicap = int(request_dict["handicap"])
        preset = request_dict["preset"]

        Game.objects.create(game_id=game_id, board_size=board_size,
                            preset=preset, handicap=handicap,
                            room_visitors=["", ""],
                            player_black="", player_white="")
        return HttpResponse(game_id)

    def generate_id(self) -> str:
        md5 = hashlib.md5()
        phrase_to_hash = str(datetime.now()).encode()
        md5.update(phrase_to_hash)
        return md5.hexdigest()[:12]


class GameView(View):
    def get(self, request, *args, **kwargs):
        print(request.META["PATH_INFO"][6:-1])
        return render(request, "goban/index.html",
                      {"game_id": request.META["PATH_INFO"][6:-1]})
