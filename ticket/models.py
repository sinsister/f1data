from django.db import models
from extentions.utils import jalali_converter
from accounts.models import User

class TicketStatus(models.TextChoices):
    TO_DO = "To Do", "انتظار"
    IN_PROGRESS = "In Progress", "برسی"
    IN_REVIEW = "In Review", "بازبینی"
    DONE = "Done", "تمام شده"


class Ticket(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, verbose_name="موضوع تیکت")
    status = models.CharField(
        max_length=25,
        choices=TicketStatus.choices,
        default=TicketStatus.TO_DO,
        verbose_name="وضعیت تیکت",
    )
    description = models.TextField(verbose_name="توضیحات تیکت")
    created_at = models.DateTimeField("created at", auto_now_add=True)
    updated_at = models.DateTimeField("updated at", auto_now=True)

    def jcreated_at(self):
        return jalali_converter(self.created_at)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "تیکت"
        verbose_name_plural = "تیکت ها"
