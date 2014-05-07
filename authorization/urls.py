from django.conf.urls import patterns, url

from authorization import views

urlpatterns = patterns('',
    url(r'^read', views.read),
    url(r'^write/$', views.write),
)
