from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import patterns, include, url

from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'common.views.index'),
    url(r'^ide/', include('ide.urls')),
    url(r'^doc/html/', include('doc.html_urls')),
    url(r'^admin/', include(admin.site.urls)),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
