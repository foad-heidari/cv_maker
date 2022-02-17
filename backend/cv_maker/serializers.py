from .models.education import Education
from .models.interest import Interest
from .models.language import Language
from rest_framework import serializers


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('id', 'name', 'order', 'company', 'start_at', 'end_at',)


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ('id', 'name', 'level', 'order', )


class InterestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = ('id', 'name', 'order', )
