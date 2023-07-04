# Generated by Django 4.2.2 on 2023-07-02 00:55

from django.db import migrations, models
import rest_api.models


class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0006_remove_application_form_post_application_form_job'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee_user',
            name='profile_pic',
            field=models.ImageField(blank=True, null=True, upload_to=rest_api.models.upload_employee_file),
        ),
        migrations.AlterField(
            model_name='employer_user',
            name='profile_pic',
            field=models.ImageField(blank=True, null=True, upload_to=rest_api.models.upload_employer_file),
        ),
    ]