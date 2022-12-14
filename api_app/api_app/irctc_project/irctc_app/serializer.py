from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import *

from django.contrib.auth.hashers import make_password

#Registration Serializer
class RegistrationSerializer(ModelSerializer):

    class Meta:
        model = Registration
        fields = ['user_id', 'password', 'security_ques', 'security_ans', 'first_name',
                 'middle_name', 'last_name', 'gender', 'email', 'mobile_number', 
                 'dob', 'address', 'country', 'pincode', 'state']
        extra_kwargs = {
                         'password': {'write_only': True},
                         'security_ans': {'write_only':True}
                        }

        def create(self, validated_data):
            user = Registration.objects.create_user(**validated_data)
            return user

        def update(self, instance, validated_data):
            if 'password' in validated_data:
                password = validated_data.pop('password')
                instance.set_password(password)
            return super(RegistrationSerializer, self).update(instance, validated_data)
        
# ClassCostSerializer
class ClassCostSerializer(ModelSerializer):
    class Meta:
        model = ClassCost
        fields = ['ac_chair', 'ac_1ac_field', 'ac_2ac_field', 'ac_3ac_field', 'sl', 'second_class']

# FoodCostSerializer
class FoodCostSerializer(ModelSerializer):
    class Meta:
        model = FoodCost
        fields = ['veg', 'non_veg']


# DaysSerializer
class DaysSerializer(ModelSerializer):
    class Meta:
        model = Days
        fields = ['monday', 'tuesday', 'wednesday', 'thrusday', 'friday', 'saturday', 'sunday']


# TrainScheduleSerializer
class CurrentStatusSerializer(ModelSerializer):
    class_cost = serializers.SerializerMethodField()
    food_cost = serializers.SerializerMethodField()
    # seat_count = serializers.SerializerMethodField()
    days = serializers.SerializerMethodField()

    class Meta:
        model = CurrentStatus
        fields = ['train_id', 'train_num', 'train_name', 'source', 'destination', 'date',
        'source_departure_time', 'destination_arrival_time', 'ac_chair', 'ac_1ac_field', 'ac_2ac_field', 'ac_3ac_field',
        'sl', 'second_class', 'class_cost', 'food_cost', 'days' ]

    def get_class_cost(self, obj):
        queryset_list = ClassCost.objects.all()
        c = queryset_list.filter(train=obj.train_id)
        serializer = ClassCostSerializer(c, many=True)
        return serializer.data

    def get_food_cost(self, obj):
        queryset_list = FoodCost.objects.all()
        c = queryset_list.filter(train_id=obj.train_id)
        serializer = FoodCostSerializer(c, many=True)
        return serializer.data

    def get_days(self, obj):
        queryset_list = Days.objects.all()
        c = queryset_list.filter(train_num=obj.train_num)
        serializer = DaysSerializer(c, many=True)
        return serializer.data

#PassengerRecord Serializer
class PassengerRecordSerializer(ModelSerializer):

    class Meta:
        model = PassengerRecord
        fields = ['user_id', 'date', 'train_num', 'p_count', 'veg',
                 'non_veg', 'classes', 'total_amount']


# TrainDetailsSerializer
class TrainDetailsSerializer(ModelSerializer):
    class Meta:
        model = CurrentStatus
        fields = ['source', 'destination', 'train_name', 
                'source_departure_time', 'destination_arrival_time']



#UpcomingJourneySerializer
class UpcomingJourneySerializer(ModelSerializer):
    train_details = serializers.SerializerMethodField()

    class Meta:
        model = PassengerRecord
        fields = ['user_id', 'date', 'train_num', 'train_details']

    def get_train_details(self, obj):
        queryset_list = CurrentStatus.objects.all()
        c = queryset_list.filter(date = obj.date) 
        c = c.filter(train_num=obj.train_num)
        serializer = TrainDetailsSerializer(c, many=True)
        return serializer.data


