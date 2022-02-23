from .models.cv import CVModel
from .models.education import Education
from .models.interest import Interest
from .models.language import Language
from rest_framework import serializers


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('id', 'cv', 'name', 'order',
                  'company', 'start_at', 'end_at',)


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ('id', 'cv', 'name', 'level', 'order', )


class InterestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = ('id', 'cv', 'name', 'order', )


class CVSerializer(serializers.ModelSerializer):
    class Meta:
        model = CVModel
        fields = ('id', 'status', )
