# Generated by Django 4.2.8 on 2023-12-10 05:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wwscout_app', '0005_peer'),
    ]

    operations = [
        migrations.AddField(
            model_name='peer',
            name='email',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='peer',
            name='phone_number',
            field=models.IntegerField(default='0'),
        ),
    ]
