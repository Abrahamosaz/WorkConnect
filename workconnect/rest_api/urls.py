from django.urls import path
from .views import get_post, create_post

urlpatterns = [
    path('posts/', get_post),
    path('create_post/', create_post)
]