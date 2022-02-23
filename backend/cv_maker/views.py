from rest_framework import viewsets, permissions

from .models.cv import CVModel
from .serializers import CVSerializer, EducationSerializer, InterestsSerializer, LanguageSerializer
from .models.language import Language
from .models.education import Education
from .models.interest import Interest, Interest


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
