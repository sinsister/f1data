from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    Permission,
    Group,
)
from django.utils.translation import gettext_lazy as _

from extentions.utils import jalali_converter
from extentions.validations import is_persian
from .managers import UserManager


class UserLevel(models.TextChoices):
    VIP = "v", "وی ای پی"
    PRO = "p", "پرو"
    FREE = "f", "رایگان"


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        max_length=120, unique=True, db_index=True, verbose_name="ایمیل"
    )
    fullname = models.CharField(
        max_length=34, verbose_name="نام کامل", validators=[is_persian]
    )
    city = models.CharField(verbose_name="شهر", default="Tehran", max_length=100)
    username = models.CharField(max_length=20, unique=True, verbose_name="نام کاربری")
    is_active = models.BooleanField(default=True, db_index=True, verbose_name="فعال ؟")
    is_ban = models.BooleanField(
        default=False, db_index=True, verbose_name="محدود شده ؟"
    )
    is_admin = models.BooleanField(default=False, verbose_name="ادمین ؟")
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    level = models.CharField(
        max_length=2,
        choices=UserLevel.choices,
        default=UserLevel.FREE,
        verbose_name="سطح کاربری",
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_("user permissions"),
        blank=True,
        help_text=_("Specific permissions for this user."),
        related_name="auth_user_set",
        related_query_name="user",
    )
    groups = models.ManyToManyField(
        Group,
        verbose_name="گروه ها",
        blank=True,
        help_text=_(
            "The groups this user belongs to. A user will get all permissions granted to each of their groups."
        ),
        related_name="auth_user_set",
        related_query_name="user",
    )

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ("fullname",)

    class Meta:
        verbose_name = "کاربر"
        verbose_name_plural = "کاربران"

    def __str__(self):
        return self.fullname

    def is_staff(self):
        return self.is_admin

    def jlast_login(self):
        return jalali_converter(self.last_login)

    def jcreated_at(self):
        return jalali_converter(self.created)
    
    jlast_login.short_description = "آخرین ورود"
