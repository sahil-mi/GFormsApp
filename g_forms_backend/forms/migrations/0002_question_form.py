# Generated by Django 5.1.7 on 2025-03-14 06:45

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='form',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='forms.form'),
            preserve_default=False,
        ),
    ]
