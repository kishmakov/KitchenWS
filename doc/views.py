from django.http import HttpResponse
from django.shortcuts import render

import json

def content(request):
    return render(request, 'doc/content.html')

def content_header(request):
    data = {'title': 'Kitchen Documentation'}
    return HttpResponse(json.dumps(data), status=200)

def section(request, num):
    return render(request, 'doc/section_{0}.html'.format(num))

def section_header(request, num):
    data = {
        'title': 'Section #{0} — Kitchen Documentation'.format(num),
        'hasMathJax': True
    }
    return HttpResponse(json.dumps(data), status=200)