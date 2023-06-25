from django.urls import path
from .views import (PostViews, RegisterEmployerUser,
                    RegisterEmployeeUser, UserLogin,
                    CommentViews)

urlpatterns = [
    path('post/', PostViews.as_view()),
    path('register-employer/', RegisterEmployerUser),
    path('register-employee/', RegisterEmployeeUser),
    path('login/', UserLogin),
    path('post/<int:post_id>/comments', CommentViews.as_view())
]