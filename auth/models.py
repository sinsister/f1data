from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

from extentions.utils import jalali_converter
from .managers import NotExpiredManager


User = get_user_model()


class UserLogin(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="logins", verbose_name="کاربر"
    )
    refresh_token = models.CharField(max_length=450, verbose_name="رفرش توکن")
    expired_at = models.DateTimeField(verbose_name="زمان منقضی شدن")
    device_name = models.CharField(max_length=64, verbose_name="نام دستگاه")
    ip_address = models.GenericIPAddressField(verbose_name="ادرس ip")
    last_login = models.DateTimeField(verbose_name="اخرین ورود")

    default_manager = models.Manager()
    objects = NotExpiredManager()

    class Meta:
        verbose_name = "ورود کاربر"
        verbose_name_plural = "ورود کاربران"

    def __str__(self):
        return f"{self.user} - {self.device_name} - {self.ip_address}"

    def jlast_login(self):
        return jalali_converter(self.last_login)

    jlast_login.short_description = "آخرین ورود"
