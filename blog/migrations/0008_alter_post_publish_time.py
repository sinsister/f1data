# Generated by Django 5.0.2 on 2024-02-18 18:48

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_alter_post_publish_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='publish_time',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 18, 18, 48, 20, 806112, tzinfo=datetime.timezone.utc), verbose_name='زمان انتشار'),
        ),
    ]
