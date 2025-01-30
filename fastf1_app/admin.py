from django.contrib import admin
from .models import FastestPositionModel


class FastestPositionAdmin(admin.ModelAdmin):
    list_display = ("driver", "gp", "year", "identifire", "position")
    list_filter = ("year", "gp")
    search_fields = ("gp", "identifire")
    ordering = [
        "-year",  # "-jpublish"
    ]


admin.site.register(FastestPositionModel, FastestPositionAdmin)
