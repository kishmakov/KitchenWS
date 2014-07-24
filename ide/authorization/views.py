from django.http import HttpResponseNotAllowed, HttpResponse
from django.contrib.auth import authenticate, login, logout

import json

def authorization_login(request):
    if request.method != 'POST':
        return HttpResponseNotAllowed(permitted_methods='POST')

    body = json.loads(request.body.decode("utf-8"))
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

def authorization_logout(request):
    if request.method != 'POST':
        return HttpResponseNotAllowed(permitted_methods='POST')

    if not request.user.is_active:
        return HttpResponse('User was not logged in', status=200)

    logout(request)
    return HttpResponse('Successful logout', status=200)

def authorization_signup(request):
    return HttpResponse('Not yet', status=404)
