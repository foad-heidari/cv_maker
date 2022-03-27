import uuid
from django.db import models
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver

from accounts.models import User

from .base_model import BaseModel, LevelChoice, StatusChoice


class Profile(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    cv = models.OneToOneField("CVModel", on_delete=models.CASCADE)
    full_name = models.CharField(max_length=150, blank=True)
    subtitle = models.CharField(max_length=150, blank=True)
    address = models.CharField(max_length=150, blank=True)
    email_address = models.EmailField(max_length=150, blank=True)
    phone_number = models.CharField(max_length=150, blank=True)
    website = models.CharField(max_length=150, blank=True)
    linkedin = models.CharField(max_length=150, blank=True)
    github = models.CharField(max_length=150, blank=True)
    twitter = models.CharField(max_length=150, blank=True)
    career_profile = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.id)


class CVModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    status = models.CharField(
        max_length=20, default=StatusChoice.ACTIVE, choices=StatusChoice.choices)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        """
        Unicode representation for an CVModel.

        :return: string
        """

        return str(self.id)


class Language(BaseModel):
    level = models.CharField(
        max_length=20, default=LevelChoice.ZERO, choices=LevelChoice.choices)


class Skills(BaseModel):
    level = models.CharField(
        max_length=20, default=LevelChoice.ZERO, choices=LevelChoice.choices)


class Interest(BaseModel):
    pass


class Projects(BaseModel):
    description = models.TextField(blank=True)


class Education(BaseModel):
    company = models.CharField(max_length=150, blank=True)
    start_at = models.CharField(max_length=150, blank=True)
    end_at = models.CharField(max_length=150, blank=True)


class Experiences(BaseModel):
    company = models.CharField(max_length=150, blank=True)
    location = models.CharField(max_length=150, blank=True)
    start_at = models.CharField(max_length=150, blank=True)
    end_at = models.CharField(max_length=150, blank=True)
    description = models.TextField(blank=True)


# signals
@receiver(post_save, sender=CVModel)
def create_cv_profile(sender, instance, created, **kwargs):
    """
    Create a Profile for CvModel when CV Created
    """
    if created:
        Profile.objects.create(cv=instance)
