from django.urls import path
from .import views

urlpatterns = [
    path('apply', views.apply, name="apply"),
    path('login', views.login, name="login"),
    
]