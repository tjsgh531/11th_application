from django.shortcuts import render, redirect
from .models import formmodel

# Create your views here.
def index(request):
    return render(request, 'index.html')

def apply(request):
    if request.method == 'POST':
        apply = formmodel()
        apply.name = request.GET['name']
        apply.department = request.GET['department']
        apply.grade = request.GET['grade']
        apply.phone = request.GET['phone']
        apply.mail = request.GET['mail']
        apply.github = request.GET['github']
        apply.que1 = request.GET['que1']
        apply.que2 = request.GET['que2']
        apply.que3 = request.GET['que3']
        apply.que4 = request.GET['que4']
        apply.que5 = request.GET['que5']
        return redirect('')
    else:
        return render(request, 'apply.html')
    

def login(request):
    return render(request, 'login.html')
