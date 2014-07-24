from django.shortcuts import render_to_response
from django.template import RequestContext
from django.template.loader import get_template
from django.http import HttpResponse

from ide.ui.ide_views import ide_projects


def welcome(request):
    if request.user.is_authenticated():
        return ide_projects(request)

    ci = RequestContext(request)
    return render_to_response('ide/login/welcome.html', context_instance=ci)
