from django.conf.urls import patterns, url

from ui import ide_views

urlpatterns = patterns('',
    url(r'^projects', ide_views.ide_projects),
)
