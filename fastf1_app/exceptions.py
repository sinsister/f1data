from rest_framework.exceptions import APIException
from typing import List


class BadRequestQueryParamsException(APIException):
    status_code = 422
    default_detail = "must query parameters must not be none or true format, try with true parameters"

    def __init__(self, detail=None, code=None, lost_query: List = None):
        if lost_query is not None:
            query_s = ", ".join(lost_query)
            self.default_detail = (f"must query parameters {query_s} must not be none or true format, try with true "
                                   "parameters")

        super().__init__(detail=detail, code=code)
