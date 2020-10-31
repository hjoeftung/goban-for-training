import hashlib
from datetime import datetime

from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from django.views.generic.base import TemplateView


class MainView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'goban/starting_page.html')

    def post(self, request, *args, **kwargs):
        return JsonResponse({"game_id": self.generate_id()})

    def generate_id(self) -> str:
        md5 = hashlib.md5()
        phrase_to_hash = str(datetime.now()).encode()
        md5.update(phrase_to_hash)
        return md5.hexdigest()


def GameView(TemplateView):
    template_name = "goban/index.html"
