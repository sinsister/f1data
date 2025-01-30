from typing import Any, Optional, Dict

from django.core.cache import cache


def get_cache(key: Any) -> Any:
    value = cache.get(key=key)
    cache.close()
    return value


def set_cache(key: Any, value: Any, timeout: int) -> None:
    cache.set(key=key, value=value, timeout=timeout)
    cache.close()


def delete_cache(key) -> bool:
    cache_delete = cache.delete(key=key)
    cache.close()
    return cache_delete


def clear_all_cache() -> None:
    cache.clear()


def incr_cache(key: Any) -> bool:
    incr = cache.incr(key=key)
    cache.close()
    return incr


def set_user_register_cache(
    client_info: Dict,
    code: str,
    email: str,
    fullname: str,
) -> None:
    value = {
        "state": "register",
        "client_info": client_info,
        "code": code,
        "fullname": fullname,
        "email": email,
        "email": email,
    }

    key_user_info = email + "info"
    user_info = {
        "state": "register",
        "email": email,
        "email": email,
        "fullname": fullname,
        "client_info": client_info,
    }

    user_try_key = email + "try"

    set_cache(key=email, value=value, timeout=120)
    set_cache(key=key_user_info, value=user_info, timeout=600)
    set_cache(key=user_try_key, value=0, timeout=120)


def set_user_login_cache(client_info: Dict, code: str, email: str) -> None:
    value = {
        "state": "login",
        "client_info": client_info,
        "code": code,
        "email": email,
    }

    key_user_info = email + "info"
    user_info = {
        "state": "login",
        "email": email,
        "client_info": client_info,
    }

    user_try_key = email + "try"

    set_cache(key=email, value=value, timeout=120)
    set_cache(key=key_user_info, value=user_info, timeout=600)
    set_cache(key=user_try_key, value=0, timeout=120)


def set_user_resend_cache(
    state: str, client_info: Dict, code: str, email: str, fullname: str | None = None
) -> None:
    if state == "register":
        set_user_register_cache(
            client_info=client_info, code=code, email=email, fullname=fullname
        )
    else:
        set_user_login_cache(client_info=client_info, code=code, email=email)


def delete_user_auth_cache(email):
    key_user_info = email + "info"
    user_try_key = email + "try"

    delete_cache(key=email)
    delete_cache(key_user_info)
    delete_cache(user_try_key)
