from django.template import RequestContext
from django.shortcuts import render_to_response
import sys

def read(request):
    sys.stdout.write(request.method)
    context_instance = RequestContext(request)
    return render_to_response("ide_projects.html", {}, context_instance)

def write(request):
    return "200"