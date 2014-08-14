from django.conf.urls import patterns, url
from ide import views
from ide.login import login_views
from ide.projects import projects_views

urlpatterns = patterns('',
    url(r'html/welcome/$', views.welcome),
    url(r'json/welcome/header/$', views.welcome_header),

    url(r'html/projects/$', projects_views.projects),
    url(r'json/projects/header/$', projects_views.projects_header),

    url(r'html/login/wait/$', views.wait),
    url(r'json/login/wait/header/$', views.wait_header),

    url(r'html/login/again/$', views.again),
    url(r'json/login/again/header/$', views.again_header),

    # authorization

    url(r'json/login/$', login_views.auth_login),
    url(r'json/logout/$', login_views.auth_logout),
)
