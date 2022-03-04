from rest_framework import viewsets, permissions

from .serializers import (
    CVSerializer, EducationSerializer, ExperiencesSerializer,
    InterestsSerializer, LanguageSerializer, ProfileSerializer,
    ProjectsSerializer, SkillsSerializer)
from .models import (Profile, Education, Interest, Language,
                     CVModel, Skills, Projects, Experiences)


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    # TODO: only creator of the item can access the item
    # permission_classes = [permissions.IsAuthenticated]


class CVViewSet(viewsets.ModelViewSet):
    queryset = CVModel.objects.all()
    serializer_class = CVSerializer
    # TODO: only creator of the item can access the item
    # permission_classes = [permissions.IsAuthenticated]


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


class LanguageViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer


class InterestViewSet(viewsets.ModelViewSet):
    queryset = Interest.objects.all()
    serializer_class = InterestsSerializer


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skills.objects.all()
    serializer_class = SkillsSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer


class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experiences.objects.all()
    serializer_class = ExperiencesSerializer
