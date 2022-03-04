from django.urls import path, include
from rest_framework import routers

from .views import (ProfileViewSet, CVViewSet, ExperienceViewSet, LanguageViewSet,
                    InterestViewSet, EducationViewSet, ProjectViewSet,
                    SkillViewSet)

router = routers.DefaultRouter()
router.register(r'cvs', CVViewSet)
router.register(r'educations', EducationViewSet)
router.register(r'languages', LanguageViewSet)
router.register(r'interests', InterestViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'experiences', ExperienceViewSet)
router.register(r'profile', ProfileViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
