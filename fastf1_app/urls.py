from django.urls import path

from . import views

urlpatterns = [
    path("fastest-position", views.FastestPositionView.as_view()),
    path("lap-time-avg", views.LapTimeView.as_view()),
    path("sectors", views.GetSectorsView.as_view()),
    path("drivers", views.GetDriversView.as_view()),
    path("driver-info", views.DriverInfoView.as_view()),
    path("delta", views.DeltaView.as_view()),
    path("fastest-lap", views.FastestLapView.as_view()),
    path("session", views.SessionView.as_view()),
    path("session/gp", views.GPView.as_view()),
    path("driver-image", views.ImageView.as_view()),
    path("drivers-name", views.DriversNameView.as_view()),
    path("time-minus", views.TimeMinusView.as_view()),
    path("points", views.DriversPointsView.as_view()),
    path("get-fast-image", views.GetFastImageView.as_view())
]
