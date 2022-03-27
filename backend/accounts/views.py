
from rest_framework import viewsets, serializers, mixins
from django.contrib.auth import login
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authentication import BasicAuthentication
from rest_framework.generics import GenericAPIView
from rest_framework import permissions
from .serializers import RegisterSerializer, LoginSerializer

from .models import User


# class IsOwner(permissions.BasePermission):
#     message = "Not an owner."

#     def has_object_permission(self, request, view, obj):
#         return request.user == obj.owner

class LoginView(
    GenericAPIView
):
    # queryset = User.objects.all()
    serializer_class = LoginSerializer
    # authentication_classes = (BasicAuthentication,)
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        """User login with email and password."""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        login(request, user)
        return Response({
            "id": user.id,
            "token": token.key,
            "email": user.email,
        })


class RegisterView(GenericAPIView):
    serializer_class = RegisterSerializer
    permission_classes = (permissions.AllowAny,)
    queryset = User.objects.all()

    def post(self, request, *args, **kwargs):
        """User registration view."""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            "id": user.id,
            "token": token.key,
            "email": user.email,
        })


# authenticate
class Authenticate(GenericAPIView):
    serializer_class = serializers.Serializer
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        """Authenticate user."""
        user = request.user
        return Response({
            "id": user.id,
            "token": str(user.auth_token),
            "email": user.email,
        })
