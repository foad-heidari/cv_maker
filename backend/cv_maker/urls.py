from django.urls import path, include
from rest_framework import routers

from .views import LanguageViewSet, InterestViewSet, EducationViewSet

router = routers.DefaultRouter()
router.register(r'education', EducationViewSet)
router.register(r'languages', LanguageViewSet)
router.register(r'interest', InterestViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
