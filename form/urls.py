from django.urls import path
from .import views

urlpatterns = [
    path('login', views.login, name="login"),
    path('apply', views.apply, name="apply"),
    path('update/<str:user_email>', views.update, name="update"),
    path('delete/<str:user_email>', views.delete, name="delete"),
    path('introduce', views.introduce, name="introduce"),
]