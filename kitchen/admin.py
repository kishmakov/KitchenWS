from django.contrib import admin
from kitchen.models import ProjectTitle, ProjectComputation, ComputationObjective

admin.site.register(ProjectTitle)
admin.site.register(ProjectComputation)
admin.site.register(ComputationObjective)