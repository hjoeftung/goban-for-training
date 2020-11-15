# Generated by Django 3.1.2 on 2020-11-04 15:28

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('game_id', models.CharField(max_length=12)),
                ('player_black_nickname', models.CharField(max_length=50)),
                ('player_white_nickname', models.CharField(max_length=50)),
                ('room_visitors', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=50), size=None)),
                ('board_size', models.IntegerField(default=0)),
                ('handicap', models.IntegerField(default=0)),
                ('preset', models.CharField(max_length=30)),
                ('kifu', models.CharField(max_length=5000)),
            ],
        ),
    ]
