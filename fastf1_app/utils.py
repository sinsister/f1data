import json
from asgiref.sync import sync_to_async, async_to_sync

from .services import SessionManager
from .exceptions import BadRequestQueryParamsException


def dumps(content):
    return json.dumps(
        content,
        ensure_ascii=False,
        allow_nan=False,
        indent=None,
        separators=(",", ":"),
    ).encode("utf-8")


async def get_session_string(request):
    kdl = await sync_to_async(request.GET.get)("kdl")
    gp = await sync_to_async(request.GET.get)("gp")
    year = await sync_to_async(request.GET.get)("year")
    identifire = await sync_to_async(request.GET.get)("identifire")

    if gp is None:
        raise BadRequestQueryParamsException(lost_query=["gp"])

    if kdl is not None:  # means kdl is true
        session_string = f"2024-{gp}-R"
    else:
        if year is None or identifire is None:
            raise BadRequestQueryParamsException(lost_query=["year", "identifire"])
        session_string = f"{year}-{gp}-{identifire}"

    return session_string


async def get_driver_data(request):
    driver = await sync_to_async(request.GET.get)("driver")
    session_string = await sync_to_async(get_session_string)(request)

    if driver is None:
        raise BadRequestQueryParamsException(lost_query=["driver"])

    return session_string, driver


manager = SessionManager()
