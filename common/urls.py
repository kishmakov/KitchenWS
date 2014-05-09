from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import patterns, include, url

from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'common.views.index'),
    url(r'^ide/', include('ui.ide_urls')),
    url(r'^login/', include('ui.login_urls')),
    url(r'^authorization/', include('authorization.urls')),
    url(r'^kitchen/$', include('kitchen.urls')),
    url(r'^admin/', include(admin.site.urls)),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
