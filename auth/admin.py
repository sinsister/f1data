from django.contrib import admin

from .models import UserLogin


@admin.register(UserLogin)
class UserLoginAdmin(admin.ModelAdmin):
    list_display = ("user", "device_name", "ip_address", "jlast_login", "expired_at")
