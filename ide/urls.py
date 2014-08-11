from django.conf.urls import patterns, url
from ide import  views
from ide.login import login_views
from ide.projects import projects_views

urlpatterns = patterns('',
    url(r'html/welcome/$', views.welcome),
    url(r'json/welcome/header/$', views.welcome_header),

    url(r'html/projects/$', projects_views.projects),
    url(r'json/projects/header/$', projects_views.projects_header),

    url(r'json/login/$', login_views.login),
)
