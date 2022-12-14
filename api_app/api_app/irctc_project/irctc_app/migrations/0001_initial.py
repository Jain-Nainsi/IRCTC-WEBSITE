# Generated by Django 4.1.4 on 2022-12-09 08:31

import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClassCost',
            fields=[
                ('class_id', models.IntegerField(db_column='Class_ID', primary_key=True, serialize=False)),
                ('ac_chair', models.IntegerField(db_column='AC CHAIR')),
                ('ac_1ac_field', models.IntegerField(db_column='AC (1AC)')),
                ('ac_2ac_field', models.IntegerField(db_column='AC (2AC)')),
                ('ac_3ac_field', models.IntegerField(db_column='AC (3AC)')),
                ('sl', models.IntegerField(db_column='SL')),
                ('second_class', models.IntegerField(db_column='SECOND CLASS')),
            ],
            options={
                'db_table': 'class_cost',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='CurrentStatus',
            fields=[
                ('s_no', models.AutoField(db_column='S_No', primary_key=True, serialize=False)),
                ('date', models.DateField(db_column='Date')),
                ('train_id', models.IntegerField(db_column='Train_ID')),
                ('train_num', models.CharField(db_column='Train_Num', max_length=10)),
                ('source', models.CharField(db_column='Source', max_length=45)),
                ('destination', models.CharField(db_column='Destination', max_length=45)),
                ('train_name', models.CharField(db_column='Train_Name', max_length=45)),
                ('source_departure_time', models.TimeField(db_column='Source_Departure_Time')),
                ('destination_arrival_time', models.TimeField(db_column='Destination_Arrival_Time')),
                ('ac_chair', models.IntegerField(db_column='AC CHAIR')),
                ('ac_1ac_field', models.IntegerField(db_column='AC (1AC)')),
                ('ac_2ac_field', models.IntegerField(db_column='AC (2AC)')),
                ('ac_3ac_field', models.IntegerField(db_column='AC (3AC)')),
                ('sl', models.IntegerField(db_column='SL')),
                ('second_class', models.IntegerField(db_column='SECOND CLASS')),
            ],
            options={
                'db_table': 'current_status',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Days',
            fields=[
                ('day_id', models.IntegerField(db_column='Day_Id', primary_key=True, serialize=False)),
                ('train_num', models.CharField(db_column='Train_Num', max_length=10)),
                ('monday', models.IntegerField(db_column='Monday')),
                ('tuesday', models.IntegerField(db_column='Tuesday')),
                ('wednesday', models.IntegerField(db_column='WEDNESDAY')),
                ('thrusday', models.IntegerField(db_column='THRUSDAY')),
                ('friday', models.IntegerField(db_column='FRIDAY')),
                ('saturday', models.IntegerField(db_column='SATURDAY')),
                ('sunday', models.IntegerField(db_column='SUNDAY')),
            ],
            options={
                'db_table': 'days',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='FixedSeats',
            fields=[
                ('seat_id', models.IntegerField(db_column='Seat_ID', primary_key=True, serialize=False)),
                ('train_id', models.IntegerField(db_column='Train_ID')),
                ('ac_chair', models.IntegerField(db_column='AC CHAIR')),
                ('ac_1ac_field', models.IntegerField(db_column='AC (1AC)')),
                ('ac_2ac_field', models.IntegerField(db_column='AC (2AC)')),
                ('ac_3ac_field', models.IntegerField(db_column='AC (3AC)')),
                ('sl', models.IntegerField(db_column='SL')),
                ('second_class', models.IntegerField(db_column='SECOND CLASS')),
            ],
            options={
                'db_table': 'fixed_seats',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='FoodCost',
            fields=[
                ('food_id', models.IntegerField(db_column='Food_ID', primary_key=True, serialize=False)),
                ('train_id', models.IntegerField(db_column='Train_ID')),
                ('veg', models.IntegerField(db_column='VEG')),
                ('non_veg', models.IntegerField(db_column='NON-VEG')),
            ],
            options={
                'db_table': 'food_cost',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Login',
            fields=[
                ('login_id', models.AutoField(db_column='Login_ID', primary_key=True, serialize=False)),
                ('user_id', models.CharField(db_column='User_ID', max_length=45)),
                ('password', models.CharField(db_column='Password', max_length=100)),
                ('login_time', models.DateTimeField(db_column='Login_Time')),
            ],
            options={
                'db_table': 'login',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='PassengerRecord',
            fields=[
                ('p_no', models.AutoField(db_column='P_No', primary_key=True, serialize=False)),
                ('user_id', models.CharField(db_column='User_ID', max_length=45)),
                ('date', models.DateField(db_column='Date')),
                ('train_num', models.CharField(db_column='Train_Num', max_length=45)),
                ('p_count', models.IntegerField(db_column='P_Count')),
                ('veg', models.IntegerField(db_column='Veg')),
                ('non_veg', models.IntegerField(db_column='Non-Veg')),
                ('classes', models.CharField(db_column='Classes', max_length=20)),
                ('amount', models.IntegerField(db_column='Amount')),
            ],
            options={
                'db_table': 'passenger_record',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Registration',
            fields=[
                ('user_id', models.CharField(db_column='User_ID', max_length=25, primary_key=True, serialize=False)),
                ('password', models.CharField(db_column='Password', max_length=100)),
                ('security_ques', models.CharField(db_column='Security_ques', max_length=45)),
                ('security_ans', models.CharField(db_column='Security_ans', max_length=45)),
                ('first_name', models.CharField(db_column='First_name', max_length=45)),
                ('middle_name', models.CharField(blank=True, db_column='Middle_name', max_length=45, null=True)),
                ('last_name', models.CharField(db_column='Last_name', max_length=45)),
                ('gender', models.CharField(db_column='Gender', max_length=45)),
                ('email', models.CharField(db_column='Email', max_length=60)),
                ('mobile_number', models.CharField(db_column='Mobile_Number', max_length=45)),
                ('dob', models.DateField(db_column='DOB')),
                ('address', models.CharField(db_column='Address', max_length=70)),
                ('country', models.CharField(db_column='Country', max_length=45)),
                ('pincode', models.IntegerField(db_column='Pincode')),
                ('state', models.CharField(db_column='State', max_length=45)),
                ('registration_time', models.DateTimeField(db_column='Registration_Time')),
            ],
            options={
                'db_table': 'registration',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='TrainSchedule',
            fields=[
                ('train_id', models.IntegerField(db_column='Train_Id', primary_key=True, serialize=False)),
                ('train_num', models.CharField(db_column='Train_Num', max_length=10)),
                ('train_name', models.CharField(db_column='Train_Name', max_length=45)),
                ('source', models.CharField(db_column='Source', max_length=45)),
                ('destination', models.CharField(db_column='Destination', max_length=45)),
                ('source_departure_time', models.TimeField(db_column='Source_Departure_Time')),
                ('destination_arrival_time', models.TimeField(db_column='Destination_Arrival_Time')),
            ],
            options={
                'db_table': 'train_schedule',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
    ]
