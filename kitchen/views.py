from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    print(request.META['HTTP_HOST'])
    return HttpResponse("Here is the kitchen.")