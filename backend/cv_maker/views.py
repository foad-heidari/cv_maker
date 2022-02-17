from rest_framework import viewsets, permissions
from .serializers import EducationSerializer, InterestsSerializer, LanguageSerializer
from .models.language import Language
from .models.education import Education
from .models.interest import Interest, Interest


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    # TODO: only creator of the item can access the item
    # permission_classes = [permissions.IsAuthenticated]


class LanguageViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer
    # TODO: only creator of the item can access the item
    # permission_classes = [permissions.IsAuthenticated]


class InterestViewSet(viewsets.ModelViewSet):
    queryset = Interest.objects.all()
    serializer_class = InterestsSerializer
    # TODO: only creator of the item can access the item
    # permission_classes = [permissions.IsAuthenticated]
