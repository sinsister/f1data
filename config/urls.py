from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static

from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)


docs_urls = [
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path(
        "api/schema/swagger/",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger-ui",
    ),
    path(
        "api/schema/redoc/",
        SpectacularRedocView.as_view(url_name="schema"),
        name="redoc",
    ),
]


urlpatterns = [
    path('ticket/', include("ticket.urls")),
    path("admin/", admin.site.urls),
    path("", include("pages.urls")),
    path("ckeditor/", include("ckeditor_uploader.urls")),
    path('api/v1/fastf1/', include("fastf1_app.urls")),
    path('podcast/', include("podcast.urls"))
]
urlpatterns += docs_urls
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
