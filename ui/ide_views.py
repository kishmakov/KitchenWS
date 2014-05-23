from django.template import RequestContext
from django.template.loader import get_template
from django.http import HttpResponse

from kitchen.models import ProjectTitle

def shorten(name):
    return name if len(name) <= 25 else name[:22] + '...'

def ide_projects(request):
    dictionary = {
        'first_name': request.user.first_name,
        'last_name': request.user.last_name,
        'project_columns': [[], []],
    }

    projects = request.user.project_title_set.all()
    parity = 1
    for project in projects:
        parity += 1
        name = shorten(project.project_name)
        dictionary['project_columns'][parity % 2].append({
            'id': project.id,
            'name': name,
            'modified': '{0:%Y-%m-%d}'.format(project.last_access)
        })

    template = get_template('ide/projects/welcome.html')
    context = RequestContext(request, dictionary)
    return HttpResponse(template.render(context))

def ide_project(request, project_id):
    dictionary = {
        'first_name': request.user.first_name,
        'last_name': request.user.last_name,
        'project': {'id' : project_id },
        'computations': []
    }

    projects = request.user.project_title_set.filter(id__exact=project_id)
    project = None
    computations = []

    if len(projects) > 0:
        project = projects[0]
        dictionary['project']['name'] = shorten(project.project_name)
        dictionary['project']['url'] = '/ide/projects/' + project_id + '/' + project.project_name + '/'

    if project is not None:
        summary = project.project_summary_set.all()[0]
        computations = project.project_computation_set.all()
        dictionary['summary'] = summary.summary

    for computation in computations:
        dictionary['computations'].append({
            'name': computation.name,
            'id': computation.id
        })



    print('project: id = {0}, name = {1}'.format(project_id, project.project_name))

    # projects = request.user.project_title_set.all()
    # parity = 1
    # for project in projects:
    #     parity += 1
    #     name = project.project_name if len(project.project_name) <= 25 \
    #         else project.project_name[22] + '...'
    #     dictionary['project_columns'][parity % 2].append({
    #         'id': project.id,
    #         'name': name,
    #         'modified': '{0:%Y-%m-%d}'.format(project.last_access)
    #     })

    template = get_template('ide/projects/project.html')
    context = RequestContext(request, dictionary)
    return HttpResponse(template.render(context))
