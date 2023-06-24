from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import (PostSerializer, EmployeeSerializer, EmployerSerializer, UserSerializer)
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.views import APIView 
from .models import Post, Employee_user, Employer_user, User
from datetime import date
from phonenumber_field.modelfields import PhoneNumberField
from rest_framework import authentication, permissions
from django.contrib.auth import authenticate

class PostViews(APIView):


    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        post = Post.objects.all()
        serializer = PostSerializer(post, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        data = request.data
        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            serializer.validated_data['author'] = request.user
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({'message': 'invalid details', 'errors': serializer.errors})




@api_view(['POST'])
def RegisterEmployerUser(request):
    data = request.data
    serializer = EmployerSerializer(data=data)
    if serializer.is_valid():
        serializer.validated_data['date_birth'] = date.fromisoformat(data['date_birth'])
        user = User.objects.create(**data['user'])
        serializer.validated_data['user'] = user
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response({'message': 'invalid data', 'errors': serializer.errors})




@api_view(['POST'])
def RegisterEmployeeUser(request):
    data = request.data
    serializer = EmployeeSerializer(data=data)
    if serializer.is_valid():
        serializer.validated_data['date_birth'] = date.fromisoformat(data['date_birth'])
        user = User.objects.create(**data['user'])
        user.set_password(user.password)
        user.save()
        serializer.validated_data['user'] = user
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response({'message': 'invalid data', 'errors': serializer.errors})


@api_view(['POST'])
def UserLogin(request):
    username = request.data.get('username', None)
    password = request.data.get('password', None)

    if not username or not password:
        return Response({'error': 'No username or password'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        user = authenticate(username=username, password=password)
        if user:
            (token, created) = Token.objects.get_or_create(user=user)
            return Response({'message': 'success', 'token': token.key}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response({'message': 'Resgister a user'}, status=status.HTTP_401_UNAUTHORIZED)

