from django.shortcuts import render
from django.http import HttpResponse
import json

def welcome(request):
    return render(request, 'ide/outside/welcome.html')

def welcome_header(request):
    data = {'title': 'Welcome to Kitchen'}
    return HttpResponse(json.dumps(data), status=200)