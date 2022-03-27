from rest_framework import viewsets, permissions

from .permissions import IsOwner, OnlyOwnDataMixin

from .serializers import (
    CVSerializer, EducationSerializer, ExperiencesSerializer,
    InterestsSerializer, LanguageSerializer, ProfileSerializer,
    ProjectsSerializer, SkillsSerializer)
from .models import (Profile, Education, Interest, Language,
                     CVModel, Skills, Projects, Experiences)


class ProfileViewSet(OnlyOwnDataMixin, viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]


class CVViewSet(viewsets.ModelViewSet):
    queryset = CVModel.objects.all()
    serializer_class = CVSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwner]

    def get_queryset(self):
        return super().get_queryset().filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class EducationViewSet(OnlyOwnDataMixin, viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = [permissions.IsAuthenticated]


class LanguageViewSet(OnlyOwnDataMixin, viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer
    permission_classes = [permissions.IsAuthenticated]


class InterestViewSet(OnlyOwnDataMixin, viewsets.ModelViewSet):
    queryset = Interest.objects.all()
    serializer_class = InterestsSerializer
    permission_classes = [permissions.IsAuthenticated]


class SkillViewSet(OnlyOwnDataMixin, viewsets.ModelViewSet):
    queryset = Skills.objects.all()
    serializer_class = SkillsSerializer
    permission_classes = [permissions.IsAuthenticated]


class ProjectViewSet(OnlyOwnDataMixin, viewsets.ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer
    permission_classes = [permissions.IsAuthenticated]


class ExperienceViewSet(OnlyOwnDataMixin, viewsets.ModelViewSet):
    queryset = Experiences.objects.all()
    serializer_class = ExperiencesSerializer
    permission_classes = [permissions.IsAuthenticated]
