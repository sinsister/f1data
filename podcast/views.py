
from django.shortcuts import render
from asgiref.sync import sync_to_async
from rest_framework.generics import ListAPIView
from rest_framework.generics import RetrieveAPIView

from .models import Podcast
from .serializers import PodcastSerializer, PodcastsSerializer


class Podcasts(ListAPIView):
    # model = Podcast
    queryset = Podcast.objects.published()
    serializer_class = PodcastsSerializer
    paginate_by = 10

    # async def post(self, request, *args, **kwargs):
    #     return await sync_to_async(self.list)(request, *args, **kwargs)

    # async def get(self, request, *args, **kwargs):
    #     return await sync_to_async(render)(request, "pages/blog.html")

    def post(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def get(self, request, *args, **kwargs):
        return render(request, "podcasts.html")


class PodcastView(RetrieveAPIView):
    queryset = Podcast.objects.published()
    serializer_class = PodcastSerializer
    lookup_field = "slug"

    def post(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def get(self, request, *args, **kwargd):
        return render(request, "podcast_single.html")


# @sync_to_async
async def get_template(request):
    return await sync_to_async(render)(request, "podcasts.html")


# @sync_to_async
# def show_post(request, slug):
#     if slug is not None:
#         result = aget_object_or_404(Podcast.objects.published(), slug=slug)
#         return render(request, "pages/blog_single.html", context={"post": result})

#     else:
#         return
