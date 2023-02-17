from django.urls import path
from .import views

urlpatterns = [
    path('login', views.login, name="login"),
    path('apply', views.apply, name="apply"),
    path('update/<int:apply_id>', views.update, name="update"),
    path('delete/<int:apply_id>', views.delete, name="delete"),
]