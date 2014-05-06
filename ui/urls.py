from django.conf.urls import patterns, url

from ui import views

urlpatterns = patterns('',
    url(r'^login', views.login),
    url(r'^ide', views.ide),
)
