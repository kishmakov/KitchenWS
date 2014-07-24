from django.conf.urls import patterns, url

from ide.ui import ide_views


urlpatterns = patterns('',
    url(r'^projects/$', ide_views.ide_projects),
    url(r'^projects/(\d+)/$', ide_views.ide_project),
)
