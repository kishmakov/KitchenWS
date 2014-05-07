from django.shortcuts import render

def ide_projects(request):
    return render(request, 'ide_projects.html')

def login(request):
    return render(request, 'login.html')

def login_again(request):
    return render(request, 'login_again.html')