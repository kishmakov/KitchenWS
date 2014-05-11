from django.conf.urls import patterns, url

from ui import views

urlpatterns = patterns('',
    url(r'^$', views.login_welcome),
    url(r'^again/$', views.login_again),
    url(r'^wait/$', views.login_wait),
)
