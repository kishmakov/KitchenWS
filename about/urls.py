from django.conf.urls import patterns, url

from about import views

urlpatterns = patterns('',
    url(r'html/terms/$', views.terms),
    url(r'json/terms/header/$', views.terms_header),
)
