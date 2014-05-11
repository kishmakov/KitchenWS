from django.shortcuts import render_to_response
from django.template import RequestContext
from django.template.loader import get_template
from django.http import HttpResponse

def ide_projects(request):
    name = {
        'first_name': request.user.first_name,
        'last_name': request.user.last_name
    }
    template = get_template('ide_projects.html')
    context = RequestContext(request, name)
    return HttpResponse(template.render(context))

def login(request):
    if request.user.is_authenticated():
        return ide_projects(request)

    ci = RequestContext(request)
    return render_to_response('login.html', context_instance=ci)

def login_again(request):
    ci = RequestContext(request)
    return render_to_response('login_again.html', context_instance=ci)