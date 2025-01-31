from django.urls import path

from .views import home, about_us, kdl, kdc, rules, login, register, kbg, archive

urlpatterns = [
    path("", home),
    path("about-us", about_us),
    path("information-archive", kdl),
    path("drivers", kdc),
    path("rules", rules),
    path("login", login),
    path("register", register),
    path("drivers-quality", kbg),
    path("data-archive", archive),
]
