from django.contrib import admin
from django.urls import path, include, re_path
from .view import index


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('rest_api.urls')),
    re_path(r'^.$', index)
]
