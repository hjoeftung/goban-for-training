# Generated by Django 3.1.2 on 2021-01-25 22:08

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goban', '0004_auto_20210125_2208'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='kifu',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=500, null=True), default=list, size=None),
        ),
    ]