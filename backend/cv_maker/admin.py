from django.contrib import admin

from .models import (Profile, Education, Interest,
                     Language, Skills, Projects, Experiences)

admin.site.register(Profile)
admin.site.register(Education)
admin.site.register(Language)
admin.site.register(Interest)
admin.site.register(Skills)
admin.site.register(Projects)
admin.site.register(Experiences)
