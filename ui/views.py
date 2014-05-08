from django.shortcuts import render, render_to_response
from django.template import RequestContext

def ide_projects(request):
    ci = RequestContext(request)
    return render_to_response('ide_projects.html', context_instance=ci)

def login(request):
    ci = RequestContext(request)
    return render_to_response('login.html', context_instance=ci)

def login_again(request):
    ci = RequestContext(request)
    return render_to_response('login_again.html', context_instance=ci)