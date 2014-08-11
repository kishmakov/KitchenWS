from django.http import HttpResponse
from django.shortcuts import render

import json

def content(request):
    return render(request, 'doc/content.html')

def content_header(request):
    data = {'title': 'Kitchen Documentation'}
    return HttpResponse(json.dumps(data), status=200)