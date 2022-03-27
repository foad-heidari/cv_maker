from rest_framework import viewsets, permissions


class IsOwner(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.user:
            if request.user.is_staff:
                return True
            else:
                return obj.user == request.user
        else:
            return False


class OnlyOwnDataMixin(object):
    def get_queryset(self):
        return super().get_queryset().filter(cv__user=self.request.user)
