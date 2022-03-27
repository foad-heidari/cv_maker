from rest_framework import serializers
from .models import (Profile, Education, Interest, Language,
                     CVModel, Skills, Projects, Experiences)


# TODO: only show own user CVs in the Cv queryset
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"


class EducationSerializer(serializers.ModelSerializer):
    startDate = serializers.CharField(
        source="start_at", allow_blank=True, default="")
    endDate = serializers.CharField(
        source="end_at", allow_blank=True, default="")

    class Meta:
        model = Education
        fields = ('id', 'cv', 'name',
                  'company', 'startDate', 'endDate', 'order', "created_at", "updated_at")


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ('id', 'cv', 'name', 'level',
                  'order', "created_at", "updated_at")


class InterestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = ('id', 'cv', 'name', 'order', "created_at", "updated_at")


class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = ('id', 'cv', 'name', 'level',
                  'order', "created_at", "updated_at")


class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ('id', 'cv', 'name', 'description',
                  'order', "created_at", "updated_at")


class ExperiencesSerializer(serializers.ModelSerializer):
    startDate = serializers.CharField(
        source="start_at", default="", allow_blank=True)
    endDate = serializers.CharField(
        source="end_at", default="", allow_blank=True)

    class Meta:
        model = Experiences
        fields = ('id', 'cv', 'name', 'location', 'description',
                  'company', 'startDate', 'endDate', 'order', "created_at", "updated_at")


class CVSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    interests = InterestsSerializer(
        read_only=True, many=True, source="interest_set")
    languages = LanguageSerializer(
        read_only=True, many=True, source="language_set")
    educations = EducationSerializer(
        read_only=True, many=True, source="education_set")
    skills = SkillsSerializer(
        read_only=True, many=True, source="skills_set")
    projects = ProjectsSerializer(
        read_only=True, many=True, source="projects_set")
    experiences = ExperiencesSerializer(
        read_only=True, many=True, source="experiences_set")

    class Meta:
        model = CVModel
        # fields = ('id', 'status', 'interests')
        fields = "__all__"
        read_only_fields = ('user',)
