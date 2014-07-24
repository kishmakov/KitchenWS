from django.conf.urls import patterns, url

from ide.authorization import views

urlpatterns = patterns('',
    url(r'^login', views.authorization_login),
    url(r'^logout', views.authorization_logout),
    url(r'^signup', views.authorization_signup),
)
