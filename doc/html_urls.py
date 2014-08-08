from django.conf.urls import patterns, url

from doc import html_views

urlpatterns = patterns('',
    url(r'/$', html_views.content),
    url(r'(?P<num>\d+)/$', html_views.content),
)
