from django.urls import path
from .views import LoginView, RegisterView, Authenticate


urlpatterns = [
    path('login/', LoginView.as_view()),
    path('register/', RegisterView.as_view()),
    path('authenticate/', Authenticate.as_view()),
]
