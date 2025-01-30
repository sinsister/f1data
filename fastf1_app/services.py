from datetime import datetime, timedelta
from asgiref.sync import sync_to_async
from typing import List, Dict
import asyncio

import arabic_reshaper
import fastf1
import fastf1.plotting
import requests
import seaborn as sns
from bidi.algorithm import get_display
from django.conf import settings
from fastf1 import ergast, get_event_schedule
from matplotlib import pyplot as plt

from .models import FastestPositionModel
from .cache import Cache


# class CacheSystem:
#     def __init__(self, cache_collection):
#         self.cache_collection = cache_collection
#         self.cache = {}

#     async def save_cache(self):
#         client = MongoClient('localhost', 27017)
#         db = client['cache_db']
#         collection = db[self.cache_collection]

#         collection.delete_many({})
#         collection.insert_one(self.cache)

#     async def load_cache(self):
#         client = MongoClient('localhost', 27017)
#         db = client['cache_db']
#         collection = db[self.cache_collection]

#         result = collection.find_one({})

#         if result:
#             self.cache = result

#     async def get_cache_key(self, method_name, *args):
#         key = method_name + str(args)
#         return hashlib.md5(key.encode()).hexdigest()

#     async def call_method(self, method, *args):
#         method_name = method.__name__
#         key = self.get_cache_key(method_name, *args)

#         if key in self.cache:
#             print(f"Reading from cache for {method_name}({args})")
#             return self.cache[key]

#         result = method(*args)
#         self.cache[key] = result
#         self.save_cache()

#         return result

# Example usage
# def add(a, b):
#     return a + b


# result1 = cache_system.call_method(add, 2, 3)
# print(result1)

# result2 = cache_system.call_method(add, 2, 3)
# print(result2)

# result3 = cache_system.call_method(add, 4, 5)
# print(result3)

# from ..models.requests import Session as SessionModel


cache_instance = Cache()


class Session:
    def __init__(
        self, year: int, gp: int | str, identifire: int | str, *args, **kwargs
    ) -> None:
        self.data = (
            year,
            gp,
            identifire,
            args,
            kwargs,
        )

    async def _get(self):
        self.dataclass = await sync_to_async(fastf1.get_session)(
            self.data[0], self.data[1], self.data[2], *self.data[3], **self.data[4]
        )
        await sync_to_async(self.dataclass.load)()

    async def load(self, *args, **kwargs) -> None:
        """
        load session data from api

        if you want to
        """
        if not hasattr(self, "dataclass"):
            await self._get()

        # try:
        self.drivers: List[int] = self.dataclass.drivers
        self.event = self.dataclass.event
        self.info = self.dataclass.session_info
        self.circuit_info = await sync_to_async(self.dataclass.get_circuit_info)()
        self.results = self.dataclass.results
        # except Exception:
        #     raise Exception(
        #         f"some of data session {self._dataclass.name} not found.\nplease check for the basic session data"
        #     )

        try:
            self.car_data = self.dataclass.car_data  # most telemetry parametr to load
            self.pos_data = self.dataclass.pos_data  # most telemetry parametr to load
            self.laps = self.dataclass.laps  # most laps parametr to load
        except Exception:
            print(
                f"some of data session {self._dataclass.name} not found.\nplease check for the data or parametres"
            )


class SessionManager:
    def __new__(cls):
        if not hasattr(cls, "instance"):
            cls.instance = super(SessionManager, cls).__new__(cls)
        return cls.instance

    def __init__(self) -> None:
        self.sessions: Dict[Session] = {}

    async def add_session(self, session_name: str, *args, **kwargs) -> str:
        """get session info and return session name"""

        if session_name not in self.sessions:
            data = session_name.split("-")
            session_obj = Session(int(data[0]), data[1], data[2], *args, **kwargs)
            await session_obj.load(*args, **kwargs)

            self.sessions[session_name] = session_obj  # name or hash_name

        return session_name

    async def get_session_results(self, session_name):
        pass

    @Cache().cache
    async def get_winner_drivers(self, year):
        url = f"https://ergast.com/api/f1/{year}/driverStandings.json"
        result = await sync_to_async(requests.get)(url)
        result = await sync_to_async(result.json)()
        full = result["MRData"]["StandingsTable"]["StandingsLists"][0][
            "DriverStandings"
        ]
        drivers = full[:3]
        driver_result = []
        for driver in drivers:
            driver_id = driver["Driver"]["driverId"]
            driver_points = driver["points"]
            team_id = driver["Constructors"][0]["constructorId"]
            drv_res = {
                "name": driver_id,
                "points": driver_points,
                "team_id": team_id,
            }
            driver_result.append(drv_res)
        return driver_result

    @Cache().cache
    async def get_drivers(self, session_name) -> Dict | List[int]:
        session: Session = await self._find_session(session_name)
        drivers = session.drivers

        result = []
        for driver_code in drivers:
            driver = await sync_to_async(session.dataclass.get_driver)(driver_code)
            position = str(driver["Position"].item())
            result.append(
                {
                    "name": self._handle_tr(driver["FullName"]),
                    "image": driver["HeadshotUrl"],
                    "position": position,
                    "teamName": self._handle_tr(driver["TeamName"]),
                    "colorTeam": driver["TeamColor"],
                    "Abbreviation": driver["Abbreviation"],
                    "id": driver["DriverId"],
                    "driver_code": driver_code,
                }
            )

        return result

    @Cache().cache
    async def get_drivers_name(self, session_name) -> Dict | List[int]:
        session: Session = await self._find_session(session_name)
        drivers = session.drivers

        data = {"drivers": []}
        for driver_code in drivers:
            driver = await sync_to_async(session.dataclass.get_driver)(driver_code)
            data["drivers"].append(
                {
                    "name": self._handle_tr(driver["FullName"]),
                }
            )

        return data["drivers"]

    @Cache().cache
    async def get_driver_image(self, session_name: str, driver: int | str):
        session: Session = await self._find_session(session_name)
        driver = await sync_to_async(session.dataclass.get_driver)(driver)
        image = driver["HeadshotUrl"]
        return image

    @Cache().cache
    async def get_fast_image(self, session_name: str):
        session: Session = await self._find_session(session_name)
        await sync_to_async(fastf1.plotting.setup_mpl)(
            mpl_timedelta_support=False, misc_mpl_mods=False
        )
        laps = await sync_to_async(session.laps.pick_quicklaps)()

        transformed_laps = laps.copy()
        transformed_laps.loc[:, "LapTime (s)"] = laps["LapTime"].dt.total_seconds()

        # order the team from the fastest (lowest median lap time) tp slower
        team_order = (
            transformed_laps[["Team", "LapTime (s)"]]
            .groupby("Team")
            .median()["LapTime (s)"]
            .sort_values()
            .index
        )
        print(team_order)

        # make a color palette associating team names to hex codes
        team_palette = {}
        for team in team_order:
            try:
                team_palette[team] = fastf1.plotting.team_color(team)
            except Exception:
                continue
        fig, ax = plt.subplots(figsize=(15, 10))
        team_palette["Kick Sauber"] = "#00e701"
        sns.boxplot(
            data=transformed_laps,
            x="Team",
            y="LapTime (s)",
            hue="Team",
            order=team_order,
            palette=team_palette,
            whiskerprops=dict(color="white"),
            boxprops=dict(edgecolor="white"),
            medianprops=dict(color="grey"),
            capprops=dict(color="white"),
        )
        countryTr = {
            "Bahrain_Grand_Prix": "گرندپری بحرین",
            "Saudi_Arabian_Grand_Prix": "گرندپری عربستان",
            "SaudiArabia_Grand_Prix": "گرندپری عربستان",
            "Australian_Grand_Prix": "گرندپری استرالیا ",
            "Azerbaijan_Grand_Prix": "گرندپری آذربایجان",
            "United_States_Grand_Prix": "گرندپری آمریکا",
            "Miami_Grand_Prix": "گرندپری میامی",
            "Monaco_Grand_Prix": "گرندپری موناکو",
            "Spanish_Grand_Prix": "گرندپری اسپانیا",
            "Canadian_Grand_Prix": "گرندپری کانادا",
            "Austrian_Grand_Prix": "گرندپری اتریش",
            "British_Grand_Prix": "گرندپری بریتانیا",
            "Hungarian_Grand_Prix": "گرندپری مجارستان",
            "Belgian_Grand_Prix": "گرندپری بلژیک",
            "Dutch_Grand_Prix": "گرندپری هلند",
            "Italian_Grand_Prix": "گرندپری ایتالیا",
            "Singapore_Grand_Prix": "گرندپری سنگاپور",
            "Japanese_Grand_Prix": "گرندپری ژاپن",
            "Qatar_Grand_Prix": "گرندپری قطر",
            "Mexico_City_Grand_Prix": "گرندپری مکزیک",
            "São_Paulo_Grand_Prix": "گرندپری برزیل",
            "Abu_Dhabi_Grand_Prix": "گرندپری ابوظبی",
            "Las_Vegas_Grand_Prix": "گرندپری لاس وگاس",
            "Emilia_Romagna_Grand_Prix": "گرندپری امیلیا رومانیا",
            "Portuguese_Grand_Prix": "گرند پری پرتغال",
            "French_Grand_Prix": "گرند پری فرانسه",
            "Styrian_Grand_Prix": "گرند پری استراین",
            "Turkish_Grand_Prix": "گرند پری ترکیه",
            "Russian_Grand_Prix": "گرند پری روسیه",
            "Tuscan_Grand_Prix": "گرند پری توسکان",
            "Eifel_Grand_Prix": "گرند پری ایفل",
            "Sakhir_Grand_Prix": "گرند پری ساخیر",
            "Chinese_Grand_Prix": "گرند پری چین",
        }
        typeTr = {
            "FP1": "تمرین اول",
            "FP2": "تمرین دوم",
            "FP3": "تمرین سوم",
            "Practice_1": "تمرین اول",
            "Practice_2": "تمرین دوم",
            "Practice_3": "تمرین سوم",
            "Sprint": "اسپرینت",
            "Sprint_Shootout": "اسپرینت شوت آوت",
            "Qualifying": "تعیین خط",
            "Race": "مسابقه",
            "Q": "تعیین خط",
            "R": "مسابقه",
        }
        gp = countryTr[session_name.split("-")[1].replace(" ", "_")]
        identifire_fa = typeTr[session_name.split("-")[2].replace(" ", "_")]
        text_to_be_reshaped = f"{gp} ({identifire_fa})"
        reshaped_text = arabic_reshaper.reshape(
            text_to_be_reshaped
        )  # seperated chars problem
        bidi_text = get_display(reshaped_text)  # direction problem
        text = bidi_text.encode().decode(
            "utf-8"
        )  # encoding problem (rectangular boxes!)
        plt.title(text)
        plt.grid(visible=False)
        # x-label is redundant
        ax.set(xlabel="@F1DataOfficial")
        plt.tight_layout()
        img = f"{settings.MEDIA_ROOT}/fast_images/{session_name}.jpg"
        await sync_to_async(plt.savefig(img))
        return {"path": f"/media/fast_images/{session_name}.jpg"}

    @Cache().cache
    async def get_driver_sectors(self, session_name: str, identifire: int | str):
        session: Session = await self._find_session(session_name)
        driver = await sync_to_async(session.laps.pick_driver)(identifire)
        sectors = {"sector1": [], "sector2": [], "sector3": []}
        sector_one, sector_two, sector_three = (
            driver.Sector1Time,
            driver.Sector2Time,
            driver.Sector3Time,
        )
        for one in sector_one:
            try:
                sectors["sector1"].append(one.__str__().split()[2])
            except Exception:
                pass
        for two in sector_two:
            try:
                sectors["sector2"].append(two.__str__().split()[2])
            except Exception:
                pass
        for three in sector_three:
            try:
                sectors["sector3"].append(three.__str__().split()[2])
            except Exception:
                pass

        sectors["sector1"] = self._remove_zero(*sectors["sector1"])
        sectors["sector2"] = self._remove_zero(*sectors["sector2"])
        sectors["sector3"] = self._remove_zero(*sectors["sector3"])
        return sectors

    @Cache().cache
    async def get_kdl_driver(self, session_name: str, identifire: str | int):
        data = await self._get_driver(session_name, identifire)
        season, round = session_name.split("-")[0], session_name.split("-")[1]
        es = await sync_to_async(get_event_schedule)(int(season))
        gps = es.EventName
        for key, value in gps.items():
            if round == value:
                round = key
        # er = self._ergast_get_standing(season, round, )
        session = await sync_to_async(ergast.Ergast)("raw")
        driver = await sync_to_async(session.get_driver_standings)(
            season, round, data["DriverId"]
        )
        try:
            er = driver[0]
            driver_age = er["DriverStandings"][0]["Driver"]["dateOfBirth"]
            nationality = er["DriverStandings"][0]["Driver"]["nationality"]
            year = driver_age.split("-")[0]
            driver_age = int(season) - int(year)
            result = {
                "name": self._handle_tr(data["FullName"]),
                "teamName": self._handle_tr(data["TeamName"]),
                "colorTeam": data["TeamColor"],
                "image": data["HeadshotUrl"],
                "id": data["DriverId"],
                "Abbreviation": data["Abbreviation"],
                "Age": driver_age,
                "Nationality": nationality,
            }
            return result
        except Exception:
            result = {
                "name": self._handle_tr(data["FullName"]),
                "teamName": self._handle_tr(data["TeamName"]),
                "colorTeam": data["TeamColor"],
                "image": data["HeadshotUrl"],
                "id": data["DriverId"],
                "Abbreviation": data["Abbreviation"],
                "Age": "موجود نیست",
                "Nationality": "موجود نیست",
            }
            return result

    # @Cache().catche
    async def _ergast_get_standing(self, season: int, round: int, driver: str):
        session = await sync_to_async(ergast.Ergast)("raw")
        driver = await sync_to_async(session.get_driver_standings)(
            season, round, driver
        )
        return driver[0]

    @Cache().cache
    async def get_event(self, year: int, country: str):
        event = await sync_to_async(fastf1.get_event)(year=year, gp=country)
        sessions = {"sessions": []}
        i = []
        num = 1
        while True:
            try:
                session = event[f"Session{num}"]
                i.append(session)
                num += 1
            except Exception:
                break
        for session in i:
            sessions["sessions"].append(self._handle_tr(session))

        return sessions

    @Cache().cache
    async def get_event_schedule(self, year: int):
        gp_s = {"Country": []}
        event = await sync_to_async(fastf1.get_event_schedule)(year=year)
        lengh = len(await sync_to_async(event.RoundNumber.to_list)())

        for i in range(1, lengh):
            gp_s["Country"].append(
                {
                    "t": event.EventName[i],
                    "tr": self._handle_tr(event.EventName[i]),
                    "round_num": i,
                    "location": event.Location[i],
                }
            )

        return gp_s

    @Cache().cache
    async def get_delta(self, session_name, identifire: int | str):
        x_driver = await self._get_fastest_of_driver(session_name, identifire)
        fastest_driver = await self.get_fastest_lap(session_name)["LapTime"]
        x_driver_lap = x_driver["LapTime"]
        minus_x = str(x_driver_lap - fastest_driver)
        if minus_x == "NaT":
            minus_x = "0 days 00:00:00:000000"
        delta = (
            self._remove_zero((minus_x.split()[2]))[0]
            if x_driver_lap != fastest_driver
            else str(0)
        )
        dataTime = delta.split(".")
        if len(dataTime) == 1:
            dtDela = f"0.{dataTime[0]}"
        else:
            dtDela = False
        if not dtDela:
            dtDela = delta
        return dtDela

    # @Cache().catche
    async def get_lap_start_times(self, session_name: str, identifire: str | int):
        session: Session = await self._find_session(session_name)
        times = await sync_to_async(session.laps.pick_driver)(str(identifire))["Time"]
        start_times = {"start_times": []}
        for lap in times:
            try:
                start_times["start_times"].append(str(lap).split()[2])
            except Exception:
                continue
        start_times["start_times"] = int(self._remove_zero(*start_times["start_times"]))
        return start_times

    @Cache().cache
    async def get_laptimes_avg(self, session_name: str, identifire: str | int):
        session: Session = await self._find_session(session_name)
        driver_laps = await sync_to_async(session.laps.pick_driver)(str(identifire))

        lap_times = {"lap_times": []}
        for i in driver_laps["LapTime"]:
            try:
                lap_times["lap_times"].append(str(i).split()[2])
            except Exception:
                pass
        lap_times["lap_times"] = self._remove_zero(*lap_times["lap_times"])

        timedeltas = []
        try:
            for t in lap_times["lap_times"]:
                a = datetime.strptime(t, "%H:%M:%S.%f")
                b = datetime.strptime("00:00:00.00000", "%H:%M:%S.%f")
                timedeltas.append(a - b)
        except ValueError:
            for t in lap_times["lap_times"]:
                try:
                    a = datetime.strptime(t, "%M:%S.%f")
                    b = datetime.strptime("00:00.00000", "%M:%S.%f")
                    timedeltas.append(a - b)
                except Exception:
                    continue
        total_time = sum(timedeltas, timedelta())
        lengh = len(timedeltas)
        avg_time = self._remove_zero(total_time / lengh if lengh != 0 else 0)
        return avg_time, lap_times["lap_times"]

    async def get_ergast_laps(self, session_name: str, driver_name: str):
        session_split = session_name.split("-")
        year = session_split[0]
        round = session_split[1]
        url = f"https://ergast.com/api/f1/{int(year)}/{round}/drivers/{driver_name}/laps.json?limit=1000"
        result = await sync_to_async(requests.get)(url)
        res = result.json()
        # print(type(res))

        laps = res["MRData"]["RaceTable"]["Races"][0]["Laps"]
        lap_times = []
        for lap in laps:
            full_lap = lap["Timings"][0]
            lap_time = full_lap["time"]
            lap_times.append(lap_time)
        timedeltas = []
        try:
            for t in lap_times:
                a = datetime.strptime(t, "%H:%M:%S.%f")
                b = datetime.strptime("00:00:00.00000", "%H:%M:%S.%f")
                timedeltas.append(a - b)
        except ValueError:
            for t in lap_times:
                try:
                    a = datetime.strptime(t, "%M:%S.%f")
                    b = datetime.strptime("00:00.00000", "%M:%S.%f")
                    timedeltas.append(a - b)
                except Exception:
                    continue
        total_time = sum(timedeltas, timedelta())
        lengh = len(timedeltas)
        avg_time = total_time / lengh if lengh != 0 else 0
        return avg_time, lap_times

    @Cache().cache
    async def get_two_laps(
        self, session_name: str, driver_one: str | int, driver_two: int | str
    ):
        avg_one, lap_one = await sync_to_async(self.get_ergast_laps)(
            session_name, driver_one
        )
        avg_two, lap_two = await sync_to_async(self.get_ergast_laps)(
            session_name, driver_two
        )
        times_one = []
        times_two = []
        for lap in lap_one:
            # print(lap)
            laps = lap.split(":")
            lapa = int(laps[0]) * 60
            lapp = float(laps[1])
            llap = lapa + lapp
            times_one.append(llap)
        for laptwo in lap_two:
            lapt = laptwo.split(":")
            la = int(lapt[0]) * 60
            lp = float(lapt[1])
            lc = la + lp
            times_two.append(lc)
        minus = []
        winner = 0
        worse = 0

        for i in range(len(times_two)):
            try:
                x_minus = times_two[i] - times_one[i]
                minute = abs(int(x_minus / 60))
                x_minute = x_minus - (minute * 60)

                if minute <= 0:
                    result = f"{x_minute}"
                else:
                    result = f"{minute}:{x_minute}"
                if x_minus < 0:
                    if str(x_minus)[0] != "-":
                        result = "-" + result
                minus.append(result)
            except IndexError:
                break

        for min in minus:
            slice_min = str(min).split(".")
            min_decimal = slice_min[1]
            back_min = slice_min[0]
            min_index = minus.index(min)
            res = back_min + "." + self._ch_decimal(min_decimal)
            minus[min_index] = res
            try:
                if float(res) < 0:
                    worse += 1
                else:
                    winner += 1
            except Exception:
                continue
        total_times = len(minus)

        return (
            minus,
            total_times,
            worse,
            winner,
            self._remove_zero(avg_one)[0],
            self._remove_zero(avg_two)[0],
        )

    # @Cache().catche

    async def get_fastest_lap(self, session_name: str):
        session: Session = await self._find_session(session_name)
        fastest = await sync_to_async(session.laps.pick_fastest)()
        return fastest.to_dict()

    @cache_instance.cache
    async def get_fastest_position(self, session_string: str, driver_number):
        deltas = await self.get_drivers_delta(session_string)
        sort_delta = sorted(deltas.items(), key=lambda x: x[1])
        number = 0
        for sd in sort_delta:
            if str(driver_number) == sd[0]:
                position = sort_delta.index(sd) + 1
                session = session_string.split("-")
                fastest = FastestPositionModel(
                    position=position,
                    year=int(session[0]),
                    gp=session[1],
                    identifire=session[2],
                )
                await fastest.asave()
                return position

    # @Cache().catche
    async def get_drivers_delta(self, session_string: str):
        drivers = await self.get_drivers(session_string)
        deltas = {}
        for driver in drivers:
            driver_code = driver["driver_code"]
            delta = await self.get_delta(session_string, driver_code)
            deltas[driver_code] = delta
        return deltas

    # @Cache().catche
    async def _find_session(self, session_name) -> Session:
        if session_name not in list(self.sessions.keys()):
            try:
                await self.add_session(session_name=session_name)
            except Exception as e:
                raise e

        return self.sessions[session_name]

    @Cache().cache
    async def _get_fastest_of_driver(self, session_name: str, identifire: int | str):
        session: Session = await self._find_session(session_name)
        result = await sync_to_async(session.laps.pick_driver)(
            str(identifire)
        ).pick_fastest()
        result = result.fillna("NaN")
        return result

    # @Cache().catche
    async def _get_driver(self, session_name: str, identifire: int | str):
        session: Session = await self._find_session(session_name)
        return await sync_to_async(session.dataclass.get_driver)(str(identifire))

    def _handle_tr(self, text: str):
        result = str(text).split(" ")
        return "_".join(result)

    # @Cache().catche
    def _append(self, iterator, *args, **kwargs):
        for arg in args:
            iterator.append(arg)

    def _rm_zero(self, text: str):
        text_data = []
        text_lengh = len(text)
        for i in range(text_lengh):
            if int(text[i]) != 0:
                text_data.append(text[i])
            else:
                text_data.append(text[i])
        return "".join(text_data)

    def _ch_zero(self, *text: tuple[str]) -> str:
        lengh = len(text)
        x = 0
        result = ""
        for i in range(lengh):
            try:
                if text == str("000"):
                    result += f"000"
                    continue
                if int(txt := self._rm_zero(text[i])) > 0:
                    if i == lengh - 2:
                        result += f"{txt}."
                    elif i == lengh - 1:
                        result += self._ch_decimal(f"{txt}")
                    else:
                        result += f"{txt}:"
            except ValueError:
                pass
            x += 1
        if len(result) < 1:
            return result
        elif result[0] == "0":
            result = result[1:]
        return result

    def _remove_zero(self, *times: tuple[str]) -> list[str]:
        result = []
        for time in times:
            time_data = str(time).split(":")
            try:
                hour, minute, second = time_data[0], time_data[1], time_data[2]
            except Exception:
                continue
            del time_data
            try:
                second_data = second.split(".")
                if len(second_data) > 1:
                    second, milisecond = second_data[0], second_data[1]
                else:
                    second, milisecond = second_data[0], None
            except Exception:
                pass
            if milisecond is not None:
                text = self._ch_zero(hour, minute, second, self._ch_decimal(milisecond))
            else:
                text = self._ch_zero(hour, minute, second, str("000"))
            result.append(text)

        return result

    def _ch_decimal(self, text):
        numbers = []
        for i in text:
            numbers.append(i)
        lenph = len(numbers)

        if lenph > 3:
            numbers = numbers[0:3]
        elif lenph == 2:
            numbers.append("0")
        elif lenph == 1:
            numbers.append("0")
            numbers.append("0")
        res = "".join(numbers)
        return res


# cache_system = CacheSystem('cache_collection')
# cache_system.load_cache()
# manager = SessionManager()
# session_string = "2023-Bahrain-R"
# driver = "1"
# result1 = cache_system.call_method(manager.get_fastest_position, session_string, driver)
# print(result1)
