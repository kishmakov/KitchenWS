from django.contrib.auth.models import User
from django.db import models


class ProjectTitle(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, related_name='project_title_set')
    project_name = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)
    last_access = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '"{0}" created {1:%Y-%m-%d %H:%M} UTC'.format(self.project_name, self.created)

    class Meta:
        db_table = 'kitchen_project_title'
        verbose_name = 'Project Title'

class ProjectSummary(models.Model):
    lang_choices = [
        ('ru', 'Russian'),
        ('en', 'English')
    ]

    id = models.AutoField(primary_key=True)
    project = models.ForeignKey(ProjectTitle, related_name='project_summary_set')
    lang = models.CharField(max_length=2, choices=lang_choices, default='en')
    summary = models.TextField()

    class Meta:
        db_table = 'kitchen_project_summary'
        verbose_name = 'Project Summary'
        verbose_name_plural = 'Project Summaries'


class ProjectComputation(models.Model):
    id = models.AutoField(primary_key=True)
    project = models.ForeignKey(ProjectTitle, related_name='project_computation_set')
    name = models.CharField(max_length=500)
    input = models.TextField()
    output = models.TextField()
    comment = models.TextField()

    class Meta:
        db_table = 'kitchen_project_computation'
        verbose_name = 'Project Computation'


class ComputationObjective(models.Model):
    id = models.AutoField(primary_key=True)
    project_computation_set = models.ManyToManyField(ProjectComputation, related_name='computation_objective_set')
    name = models.CharField(max_length=500)
    type = models.CharField(max_length=50)
    parametrization = models.CharField(max_length=500)
    input = models.TextField()

    class Meta:
        db_table = 'kitchen_computation_objective'
        verbose_name = 'Computation Objective'

