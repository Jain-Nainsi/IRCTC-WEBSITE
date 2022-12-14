from django.shortcuts import render
import json
from django.http import HttpResponse, JsonResponse
from .paginations import (MultiplePageNumberPagination, SinglePageNumberPagination)
from rest_framework.generics import ListAPIView
from rest_framework.exceptions import NotFound
from rest_framework.parsers import JSONParser
from django.contrib.auth.hashers import make_password, check_password
from django.db.models import F
from .models import *
from .serializer import *
import pdb
import datetime



# Create your views here.

# Create your views here.
def index(request):
    response = json.dumps([{'message':"Welcome to IRCTC website!!"}])
    return HttpResponse(response, content_type ='text/json')


def isNum(data):
    try:
        int(data)
        return True
    except ValueError:
        return False


#Train Table View:
class train_table_View(ListAPIView):
    
    model = CurrentStatus
    queryset = CurrentStatus.objects.all()
    serializer_class = CurrentStatusSerializer
    pagination_class = MultiplePageNumberPagination
    query_parameters = ['source', 'destination', 'doj', 'limit', 'page', 'format']

    def get(self, request, *args, **kwargs):
        for key in self.request.query_params.keys():
                if key in self.query_parameters:
                    pass
                else:
                    msg = {
                        "detail": "Invalid request."
                    }
                    raise NotFound(msg)

        try:
            if self.request.GET.get('source') and self.request.GET.get('destination') and self.request.GET.get('doj'): 
                self.pagination_class = MultiplePageNumberPagination
                date_var = datetime.datetime.strptime(self.request.GET.get('doj'), "%Y-%m-%d").date()
                queryset = self.queryset.filter(source__iexact=self.request.GET['source']) & self.queryset.filter(destination__iexact=self.request.GET['destination']) & self.queryset.filter(date=date_var)
                page = self.paginate_queryset(queryset)
                if page is not None:
                    serializer = self.get_serializer(
                        page, context={'request': request}, many=True)
                    return self.get_paginated_response(serializer.data)
                serializer = self.get_serializer(queryset, context={'request': request}, many=True)
                return HttpResponse(serializer.data, content_type="application/json")
            else:
                msg ={
                    "details" : "Invalid request."
                }
                raise NotFound(msg)
        except Exception:
            msg ={
                "details" : "Invalid request. "
            }
            raise NotFound(msg)

#User Registration View (POST):
class registration_View(ListAPIView):
    model = Registration
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer
    pagination_class = MultiplePageNumberPagination
    query_parameters = ['user_id', 'limit', 'page', 'format']

    def get(self, request, *args, **kwargs):
        for key in self.request.query_params.keys():
                if key in self.query_parameters:
                    pass
                else:
                    msg = {
                        "detail": "Invalid request."
                    }
                    raise NotFound(msg)
        
        try:
            if self.request.GET.get('user_id'):
                self.pagination_class = MultiplePageNumberPagination
                queryset = self.queryset.filter(user_id__iexact=self.request.GET['user_id'])
                page = self.paginate_queryset(queryset)
                if page is not None:
                    serializer = self.get_serializer(
                        page, context={'request': request}, many=True)
                    return self.get_paginated_response(serializer.data)
                serializer = self.get_serializer(queryset, context={'request': request}, many=True)
                return HttpResponse(serializer.data, content_type="application/json")
            else:
                self.pagination_class = MultiplePageNumberPagination
                queryset = self.queryset
                page = self.paginate_queryset(queryset)
                if page is not None:
                    serializer = self.get_serializer(
                        page, context={'request': request}, many=True)
                    return self.get_paginated_response(serializer.data)
                serializer = self.get_serializer(queryset, context={'request': request}, many=True)
                return HttpResponse(serializer.data, content_type="application/json")

        except Exception:
            msg ={
                "details" : "Invalid request. "
            }
            raise NotFound(msg)

    def post(self, request, *args, **kwargs):
        if request.method == "POST":
            JSONdata = JSONParser().parse(request)
            JSONdata['password'] = make_password(JSONdata['password'])
            serializer = self.get_serializer(data = JSONdata)
            response_data = {}
            if serializer.is_valid():
                account = serializer.save()
                response_data['Response'] = "Successfully registered a new user."
                response_data['User_id'] = account.user_id
                response_data['Email'] = account.email
                return JsonResponse(response_data, safe=False)
            else:
                return JsonResponse(serializer.errors, safe = False)


#User Login View:

class login_View(ListAPIView):
    model = Login
    queryset = Login.objects.all()
    query_parameters = ['user_id', 'limit', 'page', 'format']

    def post(self, request, *args, **kwargs):
        if request.method == "POST":
            JSONdata = JSONParser().parse(request)
            user_id_obj = JSONdata.get('user_id')
            raw_password = JSONdata.get('password')
            data = {}
            print(self.queryset.filter(user_id = user_id_obj))
            if self.queryset.filter(user_id = user_id_obj).exists():
                password = Login.objects.values_list('password', flat=True).get(user_id=user_id_obj)

                if check_password(raw_password, password):
                    data['Response'] = "Successfully logged in."
                    return JsonResponse(data, safe=False)
                else:
                    data['Response'] = "Incorrect password."
                    return JsonResponse(data, safe=False)
            else:
                print("False")
                data['Response'] = "Incorrect user_id."
                return JsonResponse(data, safe=False)



#Passenger Record View:

class passenger_record_View(ListAPIView):
    model = PassengerRecord
    queryset = PassengerRecord.objects.all()
    serializer_class = PassengerRecordSerializer

    def get(self, request, *args, **kwargs):
        for key in self.request.query_params.keys():
                if key in self.query_parameters:
                    pass
                else:
                    msg = {
                        "detail": "Invalid request."
                    }
                    raise NotFound(msg)

    def post(self, request, *args, **kwargs):
            if request.method == "POST":
                JSONdata = JSONParser().parse(request)
                doj = JSONdata['date']
                train_num = JSONdata['train_num']
                classes = (JSONdata['classes']).lower()
                p_count = JSONdata['p_count']

                serializer = self.get_serializer(data = JSONdata)
                response_data = {}

                if serializer.is_valid():
                    serializer.save()
                    response_data['Response'] = "Payment Successfull."

                    current_status_queryset = CurrentStatus.objects.all()
                    filtered_record = current_status_queryset.filter(date=doj)
                    filtered_record = filtered_record.filter(train_num__iexact=train_num)
                    filtered_record.update(**{classes: F(classes) - p_count})
                    return JsonResponse(response_data, safe=False)
                else:
                    return JsonResponse(serializer.errors, safe = False)


#User Journey Details View (POST):
class journey_details_View(ListAPIView):
    model = PassengerRecord
    queryset = PassengerRecord.objects.all()
    serializer_class = UpcomingJourneySerializer
    pagination_class = MultiplePageNumberPagination
    query_parameters = ['user_id', 'limit', 'page', 'format']
    # permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):
        for key in self.request.query_params.keys():
                if key in self.query_parameters:
                    pass
                else:
                    msg = {
                        "detail": "Invalid request."
                    }
                    raise NotFound(msg)
        
        try:
            if self.request.GET.get('user_id'):
                self.pagination_class = MultiplePageNumberPagination
                queryset = self.queryset.filter(user_id__iexact=self.request.GET['user_id'])
                page = self.paginate_queryset(queryset)
                if page is not None:
                    serializer = self.get_serializer(
                        page, context={'request': request}, many=True)
                    return self.get_paginated_response(serializer.data)
                serializer = self.get_serializer(queryset, context={'request': request}, many=True)
                return HttpResponse(serializer.data, content_type="application/json")
            else:
                msg ={
                    "details" : "Invalid request."
                }
                raise NotFound(msg)

        except Exception:
            msg ={
                "details" : "Invalid request. "
            }
            raise NotFound(msg)