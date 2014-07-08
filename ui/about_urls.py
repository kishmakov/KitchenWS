from django.conf.urls import include, patterns, url

urlpatterns = patterns('',
    url(r'^legal/$', include('ui.about_views.about_legal')),
    url(r'^doc/(?P<num>\d+)/$', include('ui.about_views.about_doc')),
)
