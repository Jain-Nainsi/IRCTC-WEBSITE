from django.urls import path, re_path
from django.views.generic import TemplateView
# from rest_framework.schemas import get_schema_view

from .import views

app_name = "irctc_app"

urlpatterns = [
    path('', views.index, name= 'index'), 
    re_path(r'^users/$', views.registration_View.as_view(), name='users'),
    re_path(r'^trains/$', views.train_table_View.as_view(), name='train_table'),
    re_path(r'^login/$', views.login_View.as_view(), name='login'),
    re_path(r'^passenger_record/$', views.passenger_record_View.as_view(), name='passenger_record'),
    re_path(r'^journey_details/$', views.journey_details_View.as_view(), name='upcoming_journey_details'),

    # # Use the `get_schema_view()` helper to add a `SchemaView` to project URLs.
    # path('openapi', get_schema_view(
    #     title="CEMD API",
    #     description="API for Center for Education Market Dynamics data on product usage by school districts.",
    #     version="1.0.0"
    # ), name='openapi-schema'),

    # # Route TemplateView to serve Swagger UI template.
    # path('swagger-ui/', TemplateView.as_view(
    #     template_name='swagger-ui.html',
    #     extra_context={'schema_url': 'openapi-schema'}
    # ), name='swagger-ui'),
]