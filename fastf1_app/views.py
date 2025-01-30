import asyncio
from asgiref.sync import sync_to_async

from adrf.views import APIView
from django.http import HttpResponse
from rest_framework.exceptions import NotFound
from django.core.exceptions import ObjectDoesNotExist

from .cache import Cache
from .models import FastestPositionModel
from .utils import manager, get_driver_data, get_session_string, dumps


class FastestPositionView(APIView):
    _is_coroutine = asyncio.coroutines._is_coroutine

    async def get(self, request):
        session_string, driver = get_driver_data(request)
        session = session_string.split("-")
        position = self.data(session=session, driver=driver)
        response = await sync_to_async(dumps)({"position": position.position})
        return HttpResponse(response)

    async def post(self, request):
        session_string, driver = get_driver_data(request)
        position = manager.get_fastest_position(session_string, driver)
        response = await sync_to_async(dumps)({"position": position})
        return HttpResponse(response)

    # @Cache().cache
    async def data(self, session: list, driver: int) -> FastestPositionModel:
        try:
            position = await FastestPositionModel.objects.filter(
                driver=driver,
                year=int(session[0]),
                gp=session[1],
                identifire=session[2],
            ).afirst()
            if position is None:
                raise NotFound()
        except ObjectDoesNotExist:
            raise NotFound()


class LapTimeView(APIView):  # deltas = deltas.fillna('')
    _is_coroutine = asyncio.coroutines._is_coroutine

    async def get(self, request):
        session_string, driver = await get_driver_data(request)
        # laptimes = cache_system.call_method(manager.get_laptimes_avg, session_string, driver)
        laptimes = await manager.get_laptimes_avg(session_string, driver)
        response = await sync_to_async(dumps)({"avg": laptimes[0], "laptimes": laptimes[1]})

        return HttpResponse(response)


class GetSectorsView(APIView):
    _is_coroutine = asyncio.coroutines._is_coroutine

    async def get(self, request):
        session_string, driver = get_driver_data(request)
        # sectors = cache_system.call_method(manager.get_driver_sectors, session_string, driver)
        sectors = await manager.get_driver_sectors(session_string, driver)

        response = await sync_to_async(dumps)({"sectors": sectors})

        return HttpResponse(response)


class GetDriversView(APIView):
    _is_coroutine = asyncio.coroutines._is_coroutine

    async def get(self, request):
        session_string = await get_session_string(request)
        # drivers = cache_system.call_method(manager.get_drivers, session_string)
        drivers = await manager.get_drivers(session_string)

        response = await sync_to_async(dumps)(drivers)

        return HttpResponse(response)


class DriverInfoView(APIView):
    _is_coroutine = asyncio.coroutines._is_coroutine

    async def get(self, request):
        session_string, driver = await get_driver_data(request)
        # driver_info = cache_system.call_method(manager.get_kdl_driver, session_string, driver)
        driver_info = await manager.get_kdl_driver(session_string, driver)

        response = await sync_to_async(dumps)({"driver_info": driver_info})

        return HttpResponse(response)


class DeltaView(APIView):
    _is_coroutine = asyncio.coroutines._is_coroutine

    async def get(self, request):
        session_string, driver = await get_driver_data(request)
        # delta = cache_system.call_method(manager.get_delta, session_string, driver)
        delta = await manager.get_delta(session_string, driver)

        response = await sync_to_async(dumps)({"delta": delta})

        return HttpResponse(response)


class FastestLapView(APIView):
    _is_coroutine = asyncio.coroutines._is_coroutine

    async def get(self, request):
        session_string, driver = await get_driver_data(request)

        fastestlap = await manager._get_fastest_of_driver(session_string, driver)
        # fastestlap = cache_system.call_method(manager._get_fastest_of_driver, session_string, driver)
        response = await sync_to_async(dumps)(
            {
                "roundNumber": fastestlap["LapNumber"],
                "position": fastestlap["Position"],
                "laptime": manager._remove_zero(
                    (str(fastestlap["LapTime"]).split()[2])
                )[0],
            }
        )

        return HttpResponse(response)


class SessionView(APIView):
    _is_coroutine = asyncio.coroutines._is_coroutine

    async def get(self, request):
        year = int(await sync_to_async(self.request.GET.get)("year"))
        country = await sync_to_async(self.request.GET.get)("country")
        event = await manager.get_event(year, country)
        response = await sync_to_async(dumps)(event)

        return HttpResponse(response)


class GPView(APIView):
    _is_coroutine = asyncio.coroutines._is_coroutine

    async def get(self, request):
        year = int(await sync_to_async(self.request.GET.get)("year"))
        event_schedule = await manager.get_event_schedule(year)
        response = await sync_to_async(dumps)(event_schedule)

        return HttpResponse(response)


class ImageView(APIView):
    _is_coroutine = asyncio.coroutines._is_coroutine

    async def get(self, request):
        session_string, driver = await get_driver_data(request)
        driver_image = await manager.get_driver_image(session_string, driver)
        response = await sync_to_async(dumps)({"driver_image": driver_image})

        return HttpResponse(response)


class DriversNameView(APIView):
    _is_coroutine = asyncio.coroutines._is_coroutine

    async def get(self, request):
        session_string = await get_session_string(request)

        drivers_name = await manager.get_drivers_name(session_string)
        # drivers_name = cache_system.call_method(manager.get_drivers_name, session_string)
        response = await sync_to_async(dumps)({"drivers_name": drivers_name})

        return HttpResponse(response)


class TimeMinusView(APIView):
    _is_coroutine = asyncio.coroutines._is_coroutine

    async def get(self, request):
        session_string = await get_session_string(request)
        driver_one = await sync_to_async(request.GET.get)("driver_one")
        driver_two = await sync_to_async(request.GET.get)("driver_two")
        minus, total_times, worse_time, winner_time, avg_one, avg_two = (
            await manager.get_two_laps(session_string, driver_one, driver_two)
        )
        response = await sync_to_async(dumps)(
            {
                "minus": minus,
                "total_times": total_times,
                "worse_time": worse_time,
                "winner_time": winner_time,
                "avg_one": avg_one,
                "avg_two": avg_two,
            }
        )

        return HttpResponse(response)


class DriversPointsView(APIView):
    _is_coroutine = asyncio.coroutines._is_coroutine

    async def get(self, request):
        year = await sync_to_async(request.GET.get)("year")
        drivers_points = await manager.get_winner_drivers(year)
        response = await sync_to_async(dumps)({"drivers_points": drivers_points})

        return HttpResponse(response)


class GetFastImageView(APIView):
    _is_coroutine = asyncio.coroutines._is_coroutine

    async def get(self, request):
        session_string = await get_session_string(request)

        image = await manager.get_fast_image(session_string)
        # drivers_points = cache_system.call_method(manager.get_winner_drivers, year)
        response = await sync_to_async(dumps)(image)

        return HttpResponse(response)
