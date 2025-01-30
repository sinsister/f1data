import threading
from functools import wraps
from typing import Callable
import pymongo
from pymongo import MongoClient
from inspect import iscoroutinefunction, iscoroutine
import pymongo.collation
import pymongo.collection
import pymongo.database


class Cache:
    data: dict
    client: MongoClient
    db: pymongo.database.Database
    collection: pymongo.collection.Collection

    def new(cls):
        if not hasattr(cls, "instance"):
            cls.instance = super(Cache, cls).new(cls)
        return cls.instance

    def __init__(self) -> None:
        self.data = {}
        self.client = MongoClient("mongodb://localhost:27017/")
        self.db = self.client["cachemongodb"]
        self.collection = self.db["cachedata"]

    def __save(self, *args, **kwargs):
        threading.Thread(
            target=self.__save_to_db, args=args, kwargs=kwargs
        ).start()

    def cache(self, func) -> Callable:
        if func.__name__ not in self.data:
            self.data[func.__name__] = {}

        is_coroutine = iscoroutinefunction(func)

        if is_coroutine:
            @wraps(func)
            def wrapper(*args, **kwargs):
                async def wrapper(*args, **kwargs):
                    name = self.args_name(*args, **kwargs)
                    if name not in self.data[func.__name__]:
                        try:
                            result = await func(*args, **kwargs)
                        except Exception as e:
                            raise e
                        self.__save(func.__name__, name, result)
                        self.data[func.__name__][name] = result
                    else:
                        result = self.data[func.__name__][name]

                    return result

                return wrapper

        else:

            @wraps(func)
            async def wrapper(*args, **kwargs):
                name = self.args_name(*args, **kwargs)
                if name not in self.data[func.__name__]:
                    try:
                        if iscoroutinefunction(func):
                            result = await func(*args, **kwargs)
                        else:
                            result = func(*args, **kwargs)
                    except Exception as e:
                        raise e
                    self.__save(func.__name__, name, result)
                    self.data[func.__name__][name] = result
                else:
                    result = self.data[func.__name__][name]

                return result

        if is_coroutine:
            return wrapper()
        return wrapper

    def args_name(self, *args, **kwargs) -> str:
        name = ""
        for arg in args:
            name += f"{hash(arg)}:{arg}-"

        for key, value in kwargs.items():
            name += f"{key}:{value}-"

        return name

    def __save_to_db(self, func_name, key, value):
        data = {"func_name": func_name, "key": key, "value": value}
        self.collection.insert_one(data)
