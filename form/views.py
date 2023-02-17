from django.shortcuts import render, redirect
from .models import formmodel

# Create your views here.
def index(request):
    return render(request, 'index.html')

def login(request):
    return render(request, 'login.html')

def apply(request):
    if request.method == 'POST':
        apply = formmodel()
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
    
def update(request, apply_id):
    apply = formmodel.objects.get(id=apply_id)
    if request.method == 'POST':
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

def delete(request, apply_id):
    apply = formmodel.objects.get(id=apply_id)
    apply.delete()
    return redirect('index')
