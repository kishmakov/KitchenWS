from django.conf.urls import patterns, url

from ui import about_views

urlpatterns = patterns('',
    url(r'^legal/$', about_views.about_legal),
)
