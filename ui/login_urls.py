from django.conf.urls import patterns, url

from ui import views

urlpatterns = patterns('',
    url(r'^again/$', views.login_again),
    url(r'^$', views.login)
)