from django.shortcuts import render
from django.http import HttpResponse

import json

def welcome(request):
    return render(request, 'ide/login/welcome.html')

def welcome_header(request):
    data = {'title': 'Login to Kitchen IDE'}
    return HttpResponse(json.dumps(data), status=200)
