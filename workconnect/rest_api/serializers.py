from rest_framework import serializers
from .models import Post, Employee_user, Employer_user, User, Comment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password']


class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(required=False)

    class Meta:
        model = Post
        fields = ['title', 'content', 'author']
        read_only_fields = ['author']


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
        fields = ['post', 'content']
        read_only_fields = ['post']