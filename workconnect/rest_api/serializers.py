from rest_framework import serializers
from .models import (Post, Employee_user, Employer_user,
                     User, Comment, Job, Application_form)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password']


class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(required=False)

    class Meta:
        model = Post
        fields = '__all__'
        read_only_fields = ['author', 'created_at', 'updated_at']


    def create(self, validated_data):
        post_obj = Post.objects.create(**validated_data)
        return post_obj


class EmployerSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Employer_user
        exclude = ['profile_pic', 'date_birth']
        read_only_fields = ['user']

    def create(self, validated_data):
        user = validated_data['user']
        employer_user = Employer_user.objects.create(**validated_data)
        return employer_user




class EmployeeSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Employee_user
        exclude = ['profile_pic', 'date_birth']
        read_only_fields = ['user']

    def create(self, validated_data):
        user = validated_data['user']
        employee_user = Employee_user.objects.create(**validated_data)
        return employee_user


class CommentSerializer(serializers.ModelSerializer):
    post = PostSerializer(required=False)

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ['post', 'created_at', 'updated_at']


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'
        read_only_fields =['employer_user']


class ApplicationFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application_form
        fields = '__all__'
        read_only_fields = ['job']