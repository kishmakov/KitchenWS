from django.http import HttpResponseNotAllowed, HttpResponse
from django.template import RequestContext
from django.shortcuts import render_to_response
from django.contrib.auth import authenticate

import json

def read(request):
    if request.method != 'POST':
        return HttpResponseNotAllowed(permitted_methods='POST')

    print('body={0}'.format(request.body))
    body = json.loads(request.body.decode("utf-8"))
    user = authenticate(username=body['username'], password=body['password'])
    if user is not None:
        context_instance = RequestContext(request)
        return render_to_response("ide_projects.html", {}, context_instance)

    return HttpResponse('Unauthorized', status=401)

def write(request):
    return "200"