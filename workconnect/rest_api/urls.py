from django.urls import path
from .views import get_post, create_post, RegisterEmployerUser

urlpatterns = [
    path('posts/', get_post),
    path('create_post/', create_post),
    path('register/', RegisterEmployerUser)
]