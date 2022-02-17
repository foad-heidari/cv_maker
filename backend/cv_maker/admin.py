from django.contrib import admin

from .models.education import Education
from .models.interest import Interest
from .models.language import Language

admin.site.register(Language)
admin.site.register(Interest)
