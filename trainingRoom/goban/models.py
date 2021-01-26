from django.db import models
from django.contrib.postgres.fields import ArrayField


# Create your models here.
class Game(models.Model):
    game_id = models.CharField(max_length=12, primary_key=True, null=False)
    player_black = models.CharField(max_length=50)
    player_white = models.CharField(max_length=50)
    room_visitors = ArrayField(models.CharField(max_length=50))
    board_size = models.IntegerField(default=0)
    handicap = models.IntegerField(default=0)
    preset = models.CharField(max_length=30)
    kifu = ArrayField(models.CharField(max_length=500, null=True), default=list)
