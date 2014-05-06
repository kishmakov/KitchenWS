from django.shortcuts import render

def ide(request):
    return render(request, 'ide.html')

def login(request):
    return render(request, 'login.html')