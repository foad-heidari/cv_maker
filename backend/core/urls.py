from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('user/', include('accounts.urls')),

    # re_path(r'^rest-auth/', include('rest_auth.urls')),
    # path('auth/', include('rest_auth.urls')),
    # re_path('auth/register/', include('rest_auth.registration.urls')),
    path('api/', include('cv_maker.urls')),
]
