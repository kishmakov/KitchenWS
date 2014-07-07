from django.conf.urls import patterns, url

from ui.about_views import about_legal, about_doc

urlpatterns = patterns('',
    url(r'^legal/$', about_legal),
    url(r'^doc/(?P<num>\d+)/$', about_doc),
)
