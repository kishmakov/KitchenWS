from django.http import HttpResponse
from django.shortcuts import render

import json

def terms(request):
    return render(request, 'about/terms.html')

def terms_header(request):
    data = {'title': 'Terms of Use'}
    return HttpResponse(json.dumps(data), status=200)