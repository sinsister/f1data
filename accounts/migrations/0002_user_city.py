# Generated by Django 5.0.2 on 2024-02-21 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='city',
            field=models.CharField(default='Tehran', max_length=100, verbose_name='شهر'),
        ),
    ]
