from rest_framework import serializers
from .models import (Post, Employee_user, Employer_user,
                     User, Comment, Job, Application_form, PostLikes)

import re


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'password']
        read_only_fields = ['id']

class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(required=False)

    class Meta:
        model = Post
        fields = '__all__'
        read_only_fields = ['author', 'created_at', 'updated_at']


    def create(self, validated_data):
        post_obj = Post.objects.create(**validated_data)
        PostLikes.objects.create(post=post_obj)
        return post_obj

class PostLikeSerializer(serializers.ModelSerializer):
    like_count = serializers.SerializerMethodField(required=False)


    class Meta:
        model = PostLikes
        fields = ['like_count', 'likes']
        read_only_fields = ['like_count', 'likes']

    def get_like_count(self, obj):
        return len(obj.likes.all())


class EmployerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employer_user
        exclude = ['date_birth']
        read_only_fields = ['user']

    def create(self, validated_data):
        employer_user = Employer_user.objects.create(**validated_data)
        return employer_user




class EmployeeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Employee_user
        exclude = ['date_birth']
        read_only_fields = ['user']

    def create(self, validated_data):
        employee_user = Employee_user.objects.create(**validated_data)
        return employee_user


class CommentSerializer(serializers.ModelSerializer):
    post = PostSerializer(required=False)

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ['post', 'created_at', 'updated_at']


class JobSerializer(serializers.ModelSerializer):
    employer_user_id = serializers.SerializerMethodField(required=False)
    class Meta:
        model = Job
        fields = '__all__'
        read_only_fields =['employer_user', 'employer_user_id']

    def get_employer_user_id(self, obj):
        return obj.employer_user.user.id


class ApplicationFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application_form
        fields = '__all__'
        read_only_fields = ['job']
        depth = 1