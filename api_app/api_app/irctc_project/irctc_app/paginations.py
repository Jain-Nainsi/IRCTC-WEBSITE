from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from django.http import HttpResponse
import json

class MultiplePageNumberPagination(PageNumberPagination):
    page_size = 3
    page_size_query_param = 'limit'
    max_page_size = 5
    page_query_param = 'page'

    def get_paginated_response(self, data):
        context = {
            'limit': self.get_page_size(self.request),
            'page_count': self.page.paginator.num_pages,
            'total_count': self.page.paginator.count,
            'links': [{'previous': self.get_previous_link()},
            {'next': self.get_next_link()}]
        }
        result_dict = {'meta': context, 'result': data}
        if self.request.query_params.get("format") == "api" :
            return Response(result_dict)
        else:
            return HttpResponse(json.dumps(result_dict), content_type = 'application/json')

class SinglePageNumberPagination(PageNumberPagination):
    page_size = 1
    page_size_query_param = 'limit'
    max_page_size = 1

    def get_paginated_response(self, data):
        context = {
            'limit' : self.get_page_size(self.request),
            'page_count': self.page.paginator.num_pages, 
            'total_count': self.page.paginator.count
        }
        result_dict ={'meta': context, 'results': data}
        if self.request.query_params.get("format")=="api":
            return Response(result_dict)
        else: 
            return HttpResponse(json.dumps(result_dict), content_type = "application/json")
