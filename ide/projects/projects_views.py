from django.shortcuts import render
from django.http import HttpResponse

import json

def projects(request):
    return render(request, 'ide/inside/projects.html')

def projects_header(request):
    data = {'title': 'Available Projects'}
    return HttpResponse(json.dumps(data), status=200)
