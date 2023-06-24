from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import (PostSerializer, EmployeeSerializer, EmployerSerializer, UserSerializer)
from rest_framework.authtoken.models import Token
from rest_framework import status
from .models import Post, Employee_user, Employer_user, User
from datetime import date
from phonenumber_field.modelfields import PhoneNumberField



@api_view(['POST'])
def RegisterEmployerUser(request):
    data = request.data
    serializer = EmployerSerializer(data=data)
    if serializer.is_valid():
        try:
            username = data['user'].get('username', None)
            user = Employer_user.objects.get(username__exact=username)
            if user:
                return Response({'message': 'This username is already taken'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            serializer.validated_data['date_birth'] = date.fromisoformat(data['date_birth'])
            user = User.objects.create(**data['user'])
            serializer.validated_data['user'] = user
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response({'message': 'invalid data', 'errors': serializer.errors})



@api_view(['GET'])
def get_post(request):
    post = Post.objects.all()
    serializer = PostSerializer(post, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def create_post(request):
    data = request.data
    serializer = PostSerializer(data=data)
    if serializer.is_valid():
        serializer.validated_data['user'] = request.user
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response({'message': 'invalid details', 'errors': serializer.errors})