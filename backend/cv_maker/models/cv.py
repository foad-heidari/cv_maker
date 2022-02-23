import uuid

from django.db import models


class StatusChoice(models.TextChoices):
    ACTIVE = "ACTIVE"
    ARCHIVE = "ARCHIVE"


class CVModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    status = models.CharField(
        max_length=20, default=StatusChoice.ACTIVE, choices=StatusChoice.choices)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.id)
