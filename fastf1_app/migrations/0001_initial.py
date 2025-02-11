# Generated by Django 5.0.2 on 2024-04-04 10:57

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FastestPositionModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gp', models.CharField(max_length=50, verbose_name='مسابقه')),
                ('year', models.IntegerField(validators=[django.core.validators.MinValueValidator(1950)])),
                ('identifire', models.CharField(max_length=50)),
                ('position', models.FloatField(null=True)),
            ],
        ),
    ]
