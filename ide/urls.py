from django.conf.urls import patterns, url
from ide.login import html_views

urlpatterns = patterns('',
    url(r'html/login/$', html_views.welcome),
    url(r'json/login/header/$', html_views.welcome_header),
)
