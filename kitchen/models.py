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
        db_table='kitchen_project_title'
        verbose_name='Project Title'