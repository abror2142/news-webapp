from django.contrib.auth.models import AbstractUser

from .managers import CustomUserManager


class CustomUser(AbstractUser):
    first_name = None
    last_name = None

    objects = CustomUserManager()