
from django.contrib import admin
from django.urls import path, include

from recetario.views import ProductViewSet, ProviderViewSet
from recetario.urls import urls
from costeador import settings

urlpatterns = [
    path('api/', include(urls)),
    path('admin/', admin.site.urls),
]

if settings.DEBUG:
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns
    from django.conf.urls.static import static

    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += static(
        settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
