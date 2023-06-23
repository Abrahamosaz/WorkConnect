from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField


# Create your models here.
class Employee_user(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.PositiveIntegerField(blank=False, null=False)
    location = models.CharField(max_length=100)
    skill = models.CharField(max_length=1000)
    phone_number = PhoneNumberField(blank=False, null=False, unique=True)
    profile_pic = models.ImageField(upload_to='employee_uploads/')


    def __str__(self):
        return self.user.first_name

class Employer_user(models.Model):
    user  = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.PositiveIntegerField(blank=False, null=False)
    location = models.CharField(max_length=100)
    phone_number = PhoneNumberField(blank=False, null=False, unique=True)
    company_name = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    address = models.TextField(null=True)
    profile_pic = models.ImageField(upload_to='employer_uploads/')

    def __str__(self):
        return self.user.first_name
    

class Post(models.Model):
    title = models.CharField(max_length=100,null=True)
    content = models.TextField(blank=False, null=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.post.title
    

class Job(models.Model):
    employer_user = models.ForeignKey(Employer_user, on_delete=models.CASCADE, related_name='jobs')
    position = models.CharField(max_length=100)
    skills = models.TextField()
    location = models.CharField(max_length=100)
    job_description = models.TextField()

    def __str__(self):
        return self.position

class Application_form(models.Model):
    position = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    skills = models.TextField()
    resume = models.FileField()
    cover_letter = models.TextField()

    def __str__(self):
        return self.first_name

