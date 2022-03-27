from django.contrib import admin
from .models import (Profile, Education, Interest,
                     Language, Skills, Projects, Experiences, CVModel)


class ProfileInline(admin.StackedInline):
    model = Profile


@admin.register(CVModel)
class CvAdmin(admin.ModelAdmin):
    list_display = ('user', 'id',)
    list_filter = ("status",)
    search_fields = ['user__email']
    inlines = [
        ProfileInline
    ]


class DefaultModelAdmin(admin.ModelAdmin):
    list_display = ('user', 'id',)
    search_fields = ['cv__user__email']

    def user(self, obj):
        return obj.cv.user


@admin.register(Education, Interest,
                Language, Skills, Projects, Experiences)
class UserCvAdmin(DefaultModelAdmin):
    pass
