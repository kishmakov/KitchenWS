from django.template import RequestContext
from django.shortcuts import render_to_response
from django.contrib.auth import authenticate

import logging

logger = logging.getLogger(__name__)

def read(request):
    logger.error('login={0} password={1}'.format(request.POST['username'], request.POST['password']))
    user = authenticate(username=request.POST['username'], password=request.POST['password'])
    context_instance = RequestContext(request)
    return render_to_response("ide_projects.html", {}, context_instance)

def write(request):
    return "200"