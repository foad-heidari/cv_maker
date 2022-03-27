from django.urls import path, include
from rest_framework import routers
from .views import LoginView, RegisterView,Authenticate


urlpatterns = [
    path('login/', LoginView.as_view()),
    # path('register/', RegisterView.as_view()),
    path('authenticate/', Authenticate.as_view()),
]
