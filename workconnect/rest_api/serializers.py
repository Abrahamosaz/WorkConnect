from rest_framework import serializers
from .models import Post, Employee_user, Employer_user, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password']


class PostSerializer(serializers.ModelSerializer):
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
        exclude = ['profile_pic', 'date_birth', 'phone_number']
        read_only_fields = ['user']

    def create(self, validated_data):
        del validated_data['user']
        print(validated_data)




class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee_user
        exclude = ['profile_pic']
        read_only_fields = ['user']