from django.shortcuts import render_to_response
from django.template import RequestContext
from django.template.loader import get_template
from django.http import HttpResponse

from ui.ide_views import ide_projects

def login_welcome(request):
    if request.user.is_authenticated():
        return ide_projects(request)

    ci = RequestContext(request)
    return render_to_response('login/welcome.html', context_instance=ci)

def login_again(request):
    ci = RequestContext(request)
    return render_to_response('login/again.html', context_instance=ci)

def login_wait(request):
    template = get_template('login/wait.html')
    context = RequestContext(request)
    return HttpResponse(template.render(context))
