from django.urls import path

# from .views import show_post
from .views import Posts, PostView, SearchView, NewsView

urlpatterns = [
    path("", Posts.as_view(), name="posts"),
    path("<slug:slug>", PostView.as_view(), name="post"),
    path("search/", SearchView.as_view(), name="search"),
    path("news/", NewsView.as_view(), name="news"),
]
