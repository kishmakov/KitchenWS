from django.conf.urls import patterns, url

from ui.about_views import about_doc, about_legal

urlpatterns = patterns('',
    url(r'^legal/$', about_legal),
    url(r'^doc/(?P<num>\d+)/$', about_doc),
)
