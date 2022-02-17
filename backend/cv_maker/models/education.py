from django.db import models

from .base_model import BaseModel


class Education(BaseModel):
    company = models.CharField(max_length=150)
    start_at = models.CharField(max_length=150)
    end_at = models.CharField(max_length=150)
