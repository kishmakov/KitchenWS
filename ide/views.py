from django.shortcuts import render
from django.http import HttpResponse
import json

def welcome(request):
    return render(request, 'ide/outside/welcome.html')

def welcome_header(request):
    data = {'title': 'Welcome to Kitchen'}
    return HttpResponse(json.dumps(data), status=200)

def wait(request):
    return render(request, 'ide/outside/wait.html')

def wait_header(request):
    data = {'title': 'Record is Suspended'}
    return HttpResponse(json.dumps(data), status=200)

def again(request):
    return render(request, 'ide/outside/again.html')

def again_header(request):
    data = {'title': 'Incorrect Login'}
    return HttpResponse(json.dumps(data), status=200)