from django.db import models

from .base_model import BaseModel, LevelChoice


class Language(BaseModel):
    level = models.CharField(
        max_length=20, default=LevelChoice.ZERO, choices=LevelChoice.choices)
