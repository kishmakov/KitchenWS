from django.conf.urls import patterns, url

from ide.ui.about_views import about_doc

urlpatterns = patterns('',
    url(r'^(?P<num>\d+)/$', about_doc),
)
