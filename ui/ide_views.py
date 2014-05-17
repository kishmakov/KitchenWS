from django.template import RequestContext
from django.template.loader import get_template
from django.http import HttpResponse

from kitchen.models import Project

def ide_projects(request):
    dictionary = {
        'first_name': request.user.first_name,
        'last_name': request.user.last_name,
        'project_columns': [[], []],
    }

    projects = request.user.project_set.all()
    parity = 1
    for project in projects:
        parity += 1
        name = project.project_name if len(project.project_name) <= 25 \
            else project.project_name[22] + '...'
        dictionary['project_columns'][parity % 2].append({
            'name': name,
            'modified': '{0:%Y-%m-%d}'.format(project.last_access)
        })

    template = get_template('ide/projects/welcome.html')
    context = RequestContext(request, dictionary)
    return HttpResponse(template.render(context))
