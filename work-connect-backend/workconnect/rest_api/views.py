from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from .serializers import (
    PostSerializer, EmployeeSerializer,
    EmployerSerializer, UserSerializer,
    CommentSerializer, ApplicationFormSerializer,
    JobSerializer
    )
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.views import APIView 
from .models import (
    Post, Employee_user, Employer_user,
    User, Comment, Application_form, Job
    )
from datetime import date
from phonenumber_field.modelfields import PhoneNumberField
from rest_framework import authentication, permissions
from django.contrib.auth import authenticate

class PostViews(APIView):


    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        if request.query_params:
            try:
                if "author_id" in request.query_params:
                    author = User.objects.get(id=request.query_params['author_id'])
                    post = Post.objects.filter(author__exact=author)
                else:
                    post = Post.objects.filter(title__icontains=request.query_params['title'])
            except Exception as err:
                return Response({'message': 'failed', 'error': err.args}, status=status.HTTP_404_NOT_FOUND)
        else:
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
            return Response({'message': 'invalid credentials', 'errors': serializer.errors})


class CommentViews(APIView):

    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, post_id):
        try:
            post = Post.objects.get(id=post_id)
        except Post.DoesNotExist:
            return Response({'message': 'post object does not exist'}, status=status.HTTP_404_NOT_FOUND)
        comment = Comment.objects.filter(post=post)
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, post_id):
        data = request.data
        try:
            post = Post.objects.get(id=post_id)
        except Post.DoesNotExist:
            Response({'message': 'post object does not exist'}, status=status.HTTP_404_NOT_FOUND)
        serializer = CommentSerializer(data=data)
        if serializer.is_valid():
            serializer.validated_data['post'] = post
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({'message': 'invalid credentials', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class JobViews(APIView):

    authentication_classes =[authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        if request.query_params:
            try:
                if "employer_id" in request.query_params:
                    employer = Employer_user.objects.get(id=request.query_params['employer_id'])
                    job = Job.objects.filter(employer_user__exact=employer)
                else:
                    job = Job.objects.filter(position__icontains=request.query_params['position'])
            except Exception as err:
                return Response({'message': 'failed', 'error': err.args}, status=status.HTTP_404_NOT_FOUND)
        else:
            job = Job.objects.all()
        serializer = JobSerializer(job, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        data = request.data
        serializer = JobSerializer(data=data)
        if serializer.is_valid():
            try:
                employer_id = request.data['employer_id']
            except KeyError:
                return Response({'message': 'provide the employer_id key'}, status=status.HTTP_400_BAD_REQUEST)
            employer = Employer_user.objects.get(id=employer_id)
            serializer.validated_data['employer_user'] = employer
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({'message': 'invalid credentials', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class ApplicationFromView(APIView):
    
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]


    def post(self, request, job_id):
        data = request.data
        serializer = ApplicationFormSerializer(data=data)
        if serializer.is_valid():
            job = Job.objects.get(id=job_id)
            serializer.validated_data['Job'] = job
            serializer.save()
            return Response(serializer.data)
        else:
            return Response({'message': 'invalid credentials', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, job_id):
        try:
            job = Job.objects.get(id=job_id)
        except Job.DoesNotExist:
            return Response({'message': 'post id does not exist'}, status=status.HTTP_400_BAD_REQUEST)
        application_objs  = Application_form.objects.filter(Job=job)
        for obj in application_objs:
            obj.delete()
        job.delete()
        return Response({'message': 'success'}, status=status.HTTP_308_PERMANENT_REDIRECT)


    def get(self, request, job_id):
        try:
            job = Job.objects.get(id=job_id)
        except Job.DoesNotExist:
            return Response({'message': 'job id does not exist'}, status=status.HTTP_400_BAD_REQUEST)
        application_form = Application_form.objects.filter(Job=job)
        serializer = ApplicationFormSerializer(application_form, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def RegisterEmployerUser(request):
    data = request.data
    serializer = EmployerSerializer(data=data)
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
