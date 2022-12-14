# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.contrib.auth.models import AbstractUser
import calendar
import time
from datetime import datetime  

class CustomUser(AbstractUser):
    pass

class ClassCost(models.Model):
    class_id = models.IntegerField(db_column='Class_ID', primary_key=True)  # Field name made lowercase.
    train = models.ForeignKey('TrainSchedule', models.DO_NOTHING, db_column='Train_ID', to_field='train_id')  # Field name made lowercase.
    ac_chair = models.IntegerField(db_column='AC CHAIR')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    ac_1ac_field = models.IntegerField(db_column='AC (1AC)')  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    ac_2ac_field = models.IntegerField(db_column='AC (2AC)')  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    ac_3ac_field = models.IntegerField(db_column='AC (3AC)')  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    sl = models.IntegerField(db_column='SL')  # Field name made lowercase.
    second_class = models.IntegerField(db_column='SECOND CLASS')  # Field name made lowercase. Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'class_cost'


class CurrentStatus(models.Model):
    s_no = models.AutoField(db_column='S_No', primary_key=True)  # Field name made lowercase.
    date = models.DateField(db_column='Date')  # Field name made lowercase.
    train_id = models.IntegerField(db_column='Train_ID')  # Field name made lowercase.
    train_num = models.CharField(db_column='Train_Num', max_length=10)  # Field name made lowercase.
    source = models.CharField(db_column='Source', max_length=45)  # Field name made lowercase.
    destination = models.CharField(db_column='Destination', max_length=45)  # Field name made lowercase.
    train_name = models.CharField(db_column='Train_Name', max_length=45)  # Field name made lowercase.
    source_departure_time = models.TimeField(db_column='Source_Departure_Time')  # Field name made lowercase.
    destination_arrival_time = models.TimeField(db_column='Destination_Arrival_Time')  # Field name made lowercase.
    ac_chair = models.IntegerField(db_column='AC CHAIR')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    ac_1ac_field = models.IntegerField(db_column='AC (1AC)')  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    ac_2ac_field = models.IntegerField(db_column='AC (2AC)')  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    ac_3ac_field = models.IntegerField(db_column='AC (3AC)')  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    sl = models.IntegerField(db_column='SL')  # Field name made lowercase.
    second_class = models.IntegerField(db_column='SECOND CLASS')  # Field name made lowercase. Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'current_status'


class Days(models.Model):
    day_id = models.IntegerField(db_column='Day_Id', primary_key=True)  # Field name made lowercase.
    train_num = models.CharField(db_column='Train_Num', max_length=10)  # Field name made lowercase.
    monday= models.IntegerField(db_column='Monday')  # Field name made lowercase.
    tuesday = models.IntegerField(db_column='Tuesday')  # Field name made lowercase.
    wednesday = models.IntegerField(db_column='WEDNESDAY')  # Field name made lowercase.
    thrusday = models.IntegerField(db_column='THRUSDAY')  # Field name made lowercase.
    friday = models.IntegerField(db_column='FRIDAY')  # Field name made lowercase.
    saturday = models.IntegerField(db_column='SATURDAY')  # Field name made lowercase.
    sunday = models.IntegerField(db_column='SUNDAY')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'days'


class FixedSeats(models.Model):
    seat_id = models.IntegerField(db_column='Seat_ID', primary_key=True)  # Field name made lowercase.
    train_id = models.IntegerField(db_column='Train_ID')  # Field name made lowercase.
    ac_chair = models.IntegerField(db_column='AC CHAIR')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    ac_1ac_field = models.IntegerField(db_column='AC (1AC)')  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    ac_2ac_field = models.IntegerField(db_column='AC (2AC)')  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    ac_3ac_field = models.IntegerField(db_column='AC (3AC)')  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    sl = models.IntegerField(db_column='SL')  # Field name made lowercase.
    second_class = models.IntegerField(db_column='SECOND CLASS')  # Field name made lowercase. Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'fixed_seats'


class FoodCost(models.Model):
    food_id = models.IntegerField(db_column='Food_ID', primary_key=True)  # Field name made lowercase.
    train_id = models.IntegerField(db_column='Train_ID')  # Field name made lowercase.
    veg = models.IntegerField(db_column='VEG')  # Field name made lowercase.
    non_veg = models.IntegerField(db_column='NON-VEG')  # Field name made lowercase. Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'food_cost'


class Login(models.Model):
    login_id = models.AutoField(db_column='Login_ID', primary_key=True)  # Field name made lowercase.
    user_id = models.CharField(db_column='User_ID', max_length=45)  # Field name made lowercase.
    password = models.CharField(db_column='Password', max_length=100)  # Field name made lowercase.
    login_time = models.DateTimeField(db_column='Login_Time')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'login'


class PassengerRecord(models.Model):
    p_no = models.AutoField(db_column='P_No', primary_key=True)  # Field name made lowercase.
    user_id = models.CharField(db_column='User_ID', max_length=45)  # Field name made lowercase.
    date = models.DateField(db_column='Date')  # Field name made lowercase.
    train_num = models.CharField(db_column='Train_Num', max_length=45)  # Field name made lowercase.
    p_count = models.IntegerField(db_column='P_Count')  # Field name made lowercase.
    veg = models.IntegerField(db_column='Veg')  # Field name made lowercase.
    non_veg = models.IntegerField(db_column='Non-Veg')  # Field name made lowercase. Field renamed to remove unsuitable characters.
    classes = models.CharField(db_column='Classes', max_length=20)  # Field name made lowercase.
    total_amount = models.IntegerField(db_column='total_amount')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'passenger_record'


class Registration(models.Model):
    current_GMT = time.gmtime()
    time_stamp = calendar.timegm(current_GMT)
    date_time = datetime.fromtimestamp(time_stamp)

    user_id = models.CharField(db_column='User_ID', primary_key=True, max_length=25)  # Field name made lowercase.
    password = models.CharField(db_column='Password', max_length=100)  # Field name made lowercase.
    security_ques = models.CharField(db_column='Security_ques', max_length=45)  # Field name made lowercase.
    security_ans = models.CharField(db_column='Security_ans', max_length=45)  # Field name made lowercase.
    first_name = models.CharField(db_column='First_name', max_length=45)  # Field name made lowercase.
    middle_name = models.CharField(db_column='Middle_name', max_length=45, blank=True, null=True)  # Field name made lowercase.
    last_name = models.CharField(db_column='Last_name', max_length=45)  # Field name made lowercase.
    gender = models.CharField(db_column='Gender', max_length=45)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=60)  # Field name made lowercase.
    mobile_number = models.CharField(db_column='Mobile_Number', max_length=45)  # Field name made lowercase.
    dob = models.DateField(db_column='DOB')  # Field name made lowercase.
    address = models.CharField(db_column='Address', max_length=70)  # Field name made lowercase.
    country = models.CharField(db_column='Country', max_length=45)  # Field name made lowercase.
    pincode = models.IntegerField(db_column='Pincode')  # Field name made lowercase.
    state = models.CharField(db_column='State', max_length=45)  # Field name made lowercase.
    registration_time = models.DateTimeField(db_column='Registration_Time',default=date_time)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'registration'


class TrainSchedule(models.Model):
    train_id = models.IntegerField(db_column='Train_Id', primary_key=True)  # Field name made lowercase.
    train_num = models.CharField(db_column='Train_Num', max_length=10)  # Field name made lowercase.
    train_name = models.CharField(db_column='Train_Name', max_length=45)  # Field name made lowercase.
    source = models.CharField(db_column='Source', max_length=45)  # Field name made lowercase.
    destination = models.CharField(db_column='Destination', max_length=45)  # Field name made lowercase.
    source_departure_time = models.TimeField(db_column='Source_Departure_Time')  # Field name made lowercase.
    destination_arrival_time = models.TimeField(db_column='Destination_Arrival_Time')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'train_schedule'
        unique_together = (('train_id', 'train_num'),)
