from django.conf.urls import patterns, url

from ui import login_views

urlpatterns = patterns('',
    url(r'^$', login_views.login_welcome),
    url(r'^again/$', login_views.login_again),
    url(r'^wait/$', login_views.login_wait),
)
