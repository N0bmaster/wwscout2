# Generated by Django 4.2.8 on 2023-12-09 17:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wwscout_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='jobapplication',
            name='email',
        ),
        migrations.RemoveField(
            model_name='jobapplication',
            name='position',
        ),
        migrations.RemoveField(
            model_name='jobapplication',
            name='resume',
        ),
    ]
