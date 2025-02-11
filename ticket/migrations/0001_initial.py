# Generated by Django 5.0.2 on 2024-02-17 13:47

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='موضوع تیکت')),
                ('status', models.CharField(choices=[('To Do', 'انتظار'), ('In Progress', 'برسی'), ('In Review', 'بازبینی'), ('Done', 'تمام شده')], default='To Do', max_length=25, verbose_name='وضعیت تیکت')),
                ('description', models.TextField(verbose_name='توضیحات تیکت')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'تیکت',
                'verbose_name_plural': 'تیکت ها',
            },
        ),
    ]
