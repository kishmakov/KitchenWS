from django.contrib import admin

from ide.kitchen.models import ProjectTitle, ProjectComputation, ComputationObjective, ProjectSummary


admin.site.register(ProjectTitle)
admin.site.register(ProjectComputation)
admin.site.register(ProjectSummary)
admin.site.register(ComputationObjective)