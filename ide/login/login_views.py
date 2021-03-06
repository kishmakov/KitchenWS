from django.http import HttpResponseNotAllowed, HttpResponse
from django.contrib.auth import authenticate, login, logout

import json

def auth_login(request):
    if request.method != 'POST':
        return HttpResponseNotAllowed(permitted_methods='POST')

    body = json.loads(request.body.decode("utf-8"))
    ### TODO: remove when ready ###
    body['username'] = 'john'
    body['password'] = 'smith'
    ### TODO: remove when ready ###
    user = authenticate(username=body['username'], password=body['password'])
    if user is not None:
        data = {'first_name': user.first_name, 'last_name': user.last_name}
        if user.is_active:
            login(request, user)
            data['message'] = 'Successful authorization.'
            return HttpResponse(json.dumps(data), status=200)
        else:
            data['message'] = 'User registration pending.'
            return HttpResponse(json.dumps(data), status=420)

    return HttpResponse('No such user', status=401)

def auth_logout(request):
    if request.method != 'POST':
        return HttpResponseNotAllowed(permitted_methods='POST')

    if not request.user.is_active:
        return HttpResponse('User was not logged in', status=200)

    logout(request)
    return HttpResponse('Successful logout', status=200)