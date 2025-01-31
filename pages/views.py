from django.shortcuts import render
from adrf.decorators import api_view
from asgiref.sync import sync_to_async


@api_view(["GET"])
async def home(request):
    return await sync_to_async(render)(request, "pages/home.html")


@api_view(["GET"])
async def about_us(request):
    return await sync_to_async(render)(request, "pages/about-us.html")


@api_view(["GET"])
async def kdl(request):
    return await sync_to_async(render)(request, "pages/kdl.html")


@api_view(["GET"])
async def kdc(request):
    return await sync_to_async(render)(request, "pages/kdc.html")


@api_view(["GET"])
async def rules(request):
    return await sync_to_async(render)(request, "pages/rules.html")


@api_view(["GET"])
async def login(request):
    return await sync_to_async(render)(request, "pages/login.html")


@api_view(["GET"])
async def register(request):
    return await sync_to_async(render)(request, "pages/register.html")


@api_view(["GET"])
async def kbg(request):
    return await sync_to_async(render)(request, "pages/kbg.html")

@api_view(["GET"])
async def archive(request):
    return await sync_to_async(render)(request, "pages/data-archive.html")