from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .models import User
from .forms import UserCreationForm, UserChangeForm


class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm

    search_fields = ("email", "fullname", "level", "username")
    ordering = ("-id",)
    filter_horizontal = ("user_permissions", "groups")

    list_display = (
        "email",
        "fullname",
        "username",
        "is_active",
        "is_admin",
        "is_ban",
        "level",
    )
    list_filter = ("is_active", "is_admin", "is_ban", "level")
    readonly_fields = ("jlast_login",)

    fieldsets = (
        (
            None,
            {
                "fields": ("email", "fullname", "level"),
            },
        ),
        (
            "دسترسی ها",
            {
                "fields": (
                    "is_active",
                    "is_ban",
                    "is_admin",
                    "is_superuser",
                    "jlast_login",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
    )

    add_fieldsets = (
        (
            None,
            {
                "fields": ("email", "fullname", "password1", "password2"),
            },
        ),
    )

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        is_superuser = request.user.is_superuser
        if not is_superuser:
            superuser_field = form.base_fields.get("is_superuser")
            if superuser_field:
                superuser_field.disabled = True
            admin_field = form.base_fields.get("is_admin")
            if admin_field:
                admin_field.disabled = True
        return form


admin.site.register(User, UserAdmin)
