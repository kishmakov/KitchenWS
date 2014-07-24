from django.conf.urls import patterns, url

from about.html_views import legal_view

urlpatterns = patterns('',
    url(r'^legal/$', legal_view),
)

