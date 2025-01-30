from django.shortcuts import render
from .models import Ticket
from django.http import HttpResponse
from .forms import TicketForm
from accounts.models import User

def index(request):
 tickets = Ticket.objects.order_by('-created_at')[:5]
 return render(request, 'index.html', {'tickets': tickets})


def ticket_by_id(request, ticket_id):
 ticket = Ticket.objects.get(pk=ticket_id)
 return render(request, 'ticket_by_id.html', {'ticket': ticket})

def create_ticket(request):
 if request.method == 'POST':
  form = TicketForm(request.POST)
  if form.is_valid():
   title = form.cleaned_data["title"]
   description = form.cleaned_data["description"]
   print(request.user.is_authenticated)
   if request.user.is_authenticated:
    user = request.user
   else:
    user = User.objects.filter(id=1).first()
  Ticket(title=title,description=description,author=user).save()
  return HttpResponse('با موفقیت انجام شد')
 else:
  form = TicketForm()
  return render(request, 'TicketForm.html', {"form":form})