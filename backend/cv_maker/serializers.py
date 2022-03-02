from .models.cv import CVModel
from .models.education import Education
from .models.interest import Interest
from .models.language import Language
from rest_framework import serializers


class EducationSerializer(serializers.ModelSerializer):
    startDate = serializers.CharField(source="start_at")
    endDate = serializers.CharField(source="end_at")

    class Meta:
        model = Education
        fields = ('id', 'cv', 'name', 'order',
                  'company', 'startDate', 'endDate',)


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ('id', 'cv', 'name', 'level', 'order', )


class InterestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = ('id', 'cv', 'name', 'order', )


class CVSerializer(serializers.ModelSerializer):
    interests = InterestsSerializer(
        read_only=True, many=True, source="interest_set")
    languages = LanguageSerializer(
        read_only=True, many=True, source="language_set")
    educations = EducationSerializer(
        read_only=True, many=True, source="education_set")

    class Meta:
        model = CVModel
        # fields = ('id', 'status', 'interests')
        fields = "__all__"
