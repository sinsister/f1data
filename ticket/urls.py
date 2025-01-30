from django.urls import path
from . import views
urlpatterns = [
    path('all', views.index, name='index'),
    path('ticket/<int:ticket_id>', views.ticket_by_id, name='ticket_by_id'),
    path('create-ticket', views.create_ticket, name='create_ticket')
]
