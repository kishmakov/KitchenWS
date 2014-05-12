from django.template import RequestContext
from django.template.loader import get_template
from django.http import HttpResponse

def ide_projects(request):
    name = {
        'first_name': request.user.first_name,
        'last_name': request.user.last_name
    }
    template = get_template('ide/projects.html')
    context = RequestContext(request, name)
    return HttpResponse(template.render(context))
