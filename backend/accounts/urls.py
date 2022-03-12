from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken import views

from .views import LoginView, RegisterView

# from .views import (RegisterSerializer)

router = routers.DefaultRouter()
router.register(r'register', RegisterView)

urlpatterns = [
    # path('', include(router.urls)),
    path('login/', LoginView.as_view()),
    # path('', include('django_rest_allauth.api.urls')),
    path('', include(router.urls)),

]
