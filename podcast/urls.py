from django.urls import path
from .views import PodcastView, Podcasts

urlpatterns = [
    path("", Podcasts.as_view(), name='podcasts'),
    path("<slug:slug>", PodcastView.as_view(), name='podcast')
]