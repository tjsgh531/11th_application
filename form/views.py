from django.shortcuts import render, redirect
from .models import formmodel

# Create your views here.
def index(request):
    applys = formmodel.objects.all()
    return render(request, 'index.html', {'applys' : applys})

def login(request):
    return render(request, 'login.html')

def apply(request):
    if request.method == 'POST':
        apply = formmodel()
        apply.login = request.POST['login']
        apply.name = request.POST['name']
        apply.major = request.POST['major']
        apply.grade = request.POST['grade']
        apply.phone = request.POST['phone']
        apply.email = request.POST['email']
        apply.git = request.POST['git']
        apply.question1 = request.POST['question1']
        apply.question2 = request.POST['question2']
        apply.question3 = request.POST['question3']
        apply.question4 = request.POST['question4']
        apply.question5 = request.POST['question5']
        apply.save()
        return redirect('index')
    else:
        return render(request, 'apply.html')
    
def update(request, user_email):
    apply = formmodel.objects.get(login=user_email)
    if request.method == 'POST':
        apply.login = request.POST['login']
        apply.name = request.POST['name']
        apply.major = request.POST['major']
        apply.grade = request.POST['grade']
        apply.phone = request.POST['phone']
        apply.email = request.POST['email']
        apply.git = request.POST['git']
        apply.question1 = request.POST['question1']
        apply.question2 = request.POST['question2']
        apply.question3 = request.POST['question3']
        apply.question4 = request.POST['question4']
        apply.question5 = request.POST['question5']
        apply.save()
        return redirect('index')
    else:
        return render(request, 'update.html', {'apply':apply})

def delete(request, user_email):
    apply = formmodel.objects.get(login=user_email)
    apply.delete()
    return redirect('index')

def introduce(request):
    return render(request, 'introduce.html')
