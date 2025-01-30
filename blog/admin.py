from django.contrib import admin
from .models import Category, Post, Comment


class PostAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "jpublish", "jlast_update", "list_category" ,"is_active", "image")
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


class CommentAdmin(admin.ModelAdmin):
    list_display = ("post", "author", "jcreated","approved_comment")
    list_filter = (
        "approved_comment", #"jpublish"
    )
    search_fields = ("post", "author")
    # prepopulated_fields = {"post": ("name",)}
    ordering = [
        "-approved_comment", #"-jpublish"
    ]

admin.site.register(Category)
admin.site.register(Post, PostAdmin)
# admin.site.register(Comment, CommentAdmin)
admin.site.site_header = "ادمین fastf1"