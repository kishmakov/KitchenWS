from django.shortcuts import render, render_to_response
from django.template import RequestContext
from django.template.loader import get_template
from django.http import HttpResponse

import sys


def welcome(request):
    # if request.user.is_authenticated():
    #     return ide_projects(request)

    # import pdb; pdb.set_trace()

    # ci = RequestContext(request)
    # return render_to_response('ide/login/welcome.html', context_instance=ci)

    return render(request, 'ide/login/welcome.html')
