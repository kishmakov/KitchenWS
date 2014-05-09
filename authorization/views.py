from django.http import HttpResponseNotFound, Http404
from django.template import RequestContext
from django.shortcuts import render_to_response
from django.contrib.auth import authenticate

import json
import logging

logger = logging.getLogger(__name__)

def read(request):
    if (request.method != 'POST'):
        return HttpResponseNotFound('<h1>Improper request type</h1>')
        # raise Http404

    logger.error('body={0}'.format(request.body))
    body = json.loads(request.body.decode("utf-8"))
    user = authenticate(username=body['username'], password=body['password'])
    context_instance = RequestContext(request)
    return render_to_response("ide_projects.html", {}, context_instance)

def write(request):
    return "200"