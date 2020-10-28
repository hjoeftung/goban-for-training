import hashlib
from datetime import datetime

from django.shortcuts import render
from django.http import JsonResponse
from django.views import View


class MainView(View):
    def get(self, request):
        game_id_dict = {"game_id": self.generate_id()}
        return render(request, 'application.html')

    def generate_id(self) -> str:
        md5 = hashlib.md5()
        phrase_to_hash = str(datetime.now()).encode()
        md5.update(phrase_to_hash)
        return md5.hexdigest()
