from django.db import models


class LevelChoice(models.TextChoices):
    ZERO = "0", "0%"
    TWENTY = "20", "20%"
    FORTY = "40", "40%"
    SIXTY = "60", "60%"
    EIGHTY = "80", "80%"
    HUNDRED = "100", "100%"


class BaseModel(models.Model):
    name = models.CharField(max_length=150)
    order = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.name
