from django.conf.urls import patterns, url
from ide.login import views

urlpatterns = patterns('',
    url(r'html/login/$', views.welcome),
    url(r'json/login/header/$', views.welcome_header),
)
