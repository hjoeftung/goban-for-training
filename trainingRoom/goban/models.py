from django.db import models


# Create your models here.
class Game(models.Model):
    game_id = models.CharField(max_length=12)
    player_black_nickname = models.CharField(max_length=50)
    player_white_nickname = models.CharField(max_length=50)
    board_size = models.IntegerField(default=0)
    handicap = models.IntegerField(default=0)
    preset = models.CharField(max_length=30)
    kifu = models.CharField(max_length=5000)
