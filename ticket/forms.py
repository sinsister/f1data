from django.forms import Form
from django import forms 
from .models import Ticket


class TicketForm(forms.Form):
    title = forms.CharField(max_length=100)
    description = forms.CharField(max_length=1000)
    