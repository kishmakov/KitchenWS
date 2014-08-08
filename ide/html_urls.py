from django.conf.urls import patterns, url

from ide.login import html_views

urlpatterns = patterns('',
    url(r'login/$', html_views.welcome),
)
