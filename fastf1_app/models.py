from django.db import models
from django.core.validators import MinValueValidator


class FastestPositionModel(models.Model):
    gp = models.CharField(max_length=50, verbose_name="مسابقه")
    year = models.IntegerField(
        validators=[MinValueValidator(1950)], verbose_name="شماره راننده"
    )
    identifire = models.CharField(max_length=50, verbose_name="منطقه")
    position = models.FloatField(null=True, verbose_name="رتبه")
    driver = models.IntegerField(default=1, verbose_name="شماره راننده")
