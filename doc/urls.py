from django.conf.urls import patterns, url

from doc import views

urlpatterns = patterns('',
    url(r'html/$', views.content),
    url(r'json/header/$', views.content_header),
    url(r'html/(?P<num>\d+)/$', views.content),
)
