from django.contrib import admin
from .models import Podcast, Category


class PodcastAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "sound", "jpublish", "jlast_update", "list_category" ,"is_active", "image")
    list_filter = (
        "is_active", #"jpublish"
    )
    search_fields = ("name", "description")
    prepopulated_fields = {"slug": ("name",)}
    ordering = [
        "-is_active", #"-jpublish"
    ]

    def list_category(self, obj):
        return ", ".join(str(category) for category in obj.category.all())
    list_category.short_description = "دسته‌بندی"


admin.site.register(Podcast, PodcastAdmin)
admin.site.register(Category)
