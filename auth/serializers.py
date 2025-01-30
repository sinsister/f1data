import sys
from django.core import exceptions
import django.contrib.auth.password_validation as validators
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from rest_framework import serializers

from extentions.validations import validate_email, persian_to_english


User = get_user_model()


class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=120)

    def validate_email(self, value):
        email = validate_email(email=value)

        users = User.objects.filter(email=email)
        if not users.exists():
            raise serializers.ValidationError("کاربری با این اطلاعات وجود ندارد")

        return email


class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField()
    password2 = serializers.CharField()

    class Meta:
        model = User
        fields = ("email", "fullname", "username", "city", "password2", "password")

    def validate_email(self, value):
        return validate_email(email=value)

    def validate_email(self, email):
        if email:
            users = User.objects.filter(email=email)
            if users.exists():
                return serializers.ValidationError(
                    "کاربر با این اطلاعات از قبل وجود دارد"
                )
        return email    

    def validate(self, data):
         # here data has all the fields which have validated values
         # so we can create a User instance out of it
         user = User(**data)
         
         # get the password from the data
         password = data.get('password')
         password = data.get('passwor2')
         
         errors = dict() 
         try:
             # validate the password and catch the exception
             validators.validate_password(password=password, user=user)
         
         # the exception raised here is different than serializers.ValidationError
         except exceptions.ValidationError as e:
             errors['password'] = list(e.messages)

         if password != password2:
            errors['password2'] = ["passwords must be match"]
         
         if errors:
             raise serializers.ValidationError(errors)
          
         return super(RegisterUserSerializer, self).validate(data)


class UserVerifySerializer(serializers.Serializer):
    email = serializers.CharField(max_length=120)
    code = serializers.CharField(min_length=6, max_length=6)

    def validate_email(self, value):
        return validate_email(email=value)

    def validate_code(self, value):
        return persian_to_english(number=value)


class ResendVerifyMessageSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=120)

    def validate_email(self, value):
        return validate_email(email=value)


class RefreshTokenSerializer(serializers.Serializer):
    refresh_token = serializers.CharField()


class TokenSerializer(serializers.Serializer):
    token = serializers.CharField()
