from django.shortcuts import render
from asgiref.sync import sync_to_async
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from rest_framework.generics import RetrieveAPIView

from .models import Post
from .serializers import PostSerializer, PostsSerializer, SearchSerializer


def dumps(content):
    return json.dumps(
        content,
        ensure_ascii=False,
        allow_nan=False,
        indent=None,
        separators=(",", ":"),
    ).encode("utf-8")


@sync_to_async
class AResponse(Response):
    pass


class Posts(ListAPIView):
    # model = Post
    queryset = Post.objects.published()
    serializer_class = PostsSerializer
    paginate_by = 10

    # async def post(self, request, *args, **kwargs):
    #     return await sync_to_async(self.list)(request, *args, **kwargs)

    # async def get(self, request, *args, **kwargs):
    #     return await sync_to_async(render)(request, "pages/blog.html")

    async def post(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    async def get(self, request, *args, **kwargs):
        return await sync_to_async(render)(request, "blog.html")

    async def list(self, request, *args, **kwargs):
        queryset = await sync_to_async(self.filter_queryset)(await sync_to_async(self.get_queryset)())

        page = await sync_to_async(self.paginate_queryset)(queryset)
        if page is not None:
            serializer = await sync_to_async(self.get_serializer)(page, many=True)
            return await sync_to_async(self.get_paginated_response)(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return await AResponse(serializer.adata)


class PostView(RetrieveAPIView):
    queryset = Post.objects.published()
    serializer_class = PostSerializer
    lookup_field = "slug"

    async def post(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    async def get(self, request, *args, **kwargd):
        return await sync_to_async(render)(request, "blog_single.html")


class SearchView(ListAPIView):
    serializer_class = SearchSerializer
    paginate_by = 10

    async def get_queryset(self):
        name = self.request.GET.get("name")
        query = await Post.objects.published().filter(name__contains=name)

        return query


class NewsView(SearchView):
    async def get_queryset(self):
        query = await Post.objects.published().filter(
            category__name__in=["news", "اخبار", "News"]
        )
        return query


# @sync_to_async


# async def get_template(request):
#     return await sync_to_async(render)(request, "blog/blog.html")


# @sync_to_async
# def show_post(request, slug):
#     if slug is not None:
#         result = aget_object_or_404(Post.objects.published(), slug=slug)
#         return await sync_to_async(render)(request, "pages/blog_single.html", context={"post": result})

#     else:
#         return
