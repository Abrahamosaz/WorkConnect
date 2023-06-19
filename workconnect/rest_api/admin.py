from django.contrib import admin
from rest_api.models import (Employee_post, Employee_user, Employee_comment,
                             Employer_comment, Employer_post, Job,
                             Application_form, Employer_user)
# Register your models here.

admin.site.register(Employee_comment)
admin.site.register(Employer_comment)
admin.site.register(Employee_post)
admin.site.register(Employer_post)
admin.site.register(Employee_user)
admin.site.register(Employer_user)
admin.site.register(Job)
admin.site.register(Application_form)
