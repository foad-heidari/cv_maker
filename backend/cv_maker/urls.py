from django.urls import path, include
from rest_framework import routers

from .views import CVViewSet, LanguageViewSet, InterestViewSet, EducationViewSet

router = routers.DefaultRouter()
router.register(r'educations', EducationViewSet)
router.register(r'languages', LanguageViewSet)
router.register(r'interests', InterestViewSet)
router.register(r'cvs', CVViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
