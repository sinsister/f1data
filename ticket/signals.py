from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Ticket
from .models import TicketStatus
import aiohttp 
from django.conf import settings 
import urllib.parse
level_dict = {
    "f" : "رایگان",
    "v" : "وی آی پی",
    "p" : "پرو",
}
status_dict = {
    "To Do" : "انتظار",
    "In Progress" : "برسی",
    "In Review" : "بازبینی",
    "Done" : "تمام شده"
}
@receiver(post_save, sender=Ticket)
async def send_notification(sender, instance: Ticket, **kwargs):
    user = instance.author
    ticket_title = instance.title
    ticket_description = instance.description
    ticket_status = status_dict[instance.status]
    ticket_created_at = instance.jcreated_at()
    email = user.email
    fullname = user.fullname
    username = user.username
    is_admin = "بله" if user.is_admin else "خیر"
    created_time = user.jcreated_at()
    level = level_dict[user.level]
    full_notification = f'🆕*تیکت جدید ثبت شد* \n' \
                        f'*➖➖➖➖➖➖➖➖➖➖➖➖➖* \n' \
                        f'✏️*عنوان*: "{ticket_title}" \n \n' \
                        f'📝*متن:* "{ticket_description}" \n \n' \
                        f'📊*وضعیت:* " {ticket_status}" \n \n' \
                        f'🕐*ساخته شده در:* " {ticket_created_at}" \n' \
                        f'*➖➖➖➖➖➖➖➖➖➖➖➖➖* \n' \
                        f' 👤*اطلاعات کاربر*👤 \n \n' \
                        f' *📧ایمیل: *{email} \n' \
                        f' *📛نام کامل: *{fullname} \n' \
                        f' *🙍‍♂️نام کاربری: *{username} \n' \
                        f' *❓ادمین است؟* {is_admin} \n' \
                        f' *💎سطح کاربری: *{level} \n' \
                        f' *📅تاریخ ثبت نام: *{created_time} \n' \
                        f'➖➖➖➖➖➖➖➖➖➖➖➖➖'

    for chat_id in settings.TELEGRAM_ADMIN_ID:
        async with aiohttp.ClientSession() as session:
            data = {
                "text":full_notification,
                "chat_id":chat_id,
                "parse_mode":"markdown"
            }
            url = f'https://api.telegram.org/{settings.TELEGRAM_BOT_TOKEN}/sendMessage'
            async with session.get(
                url=url,
                json=data,
                ) as response:
                status = response.status
                print("Status:", response.status)
                if status not in range(200,205):
                    body = await response.text()
                    print(body)
                    