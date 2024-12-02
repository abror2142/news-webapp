from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .froms import CustomUserChangeForm, CustomUserCreationForm
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['id', 'username', 'email']
    list_filter = ['id', 'username', 'email']
    fieldsets = (
        (None, {"fields": ("username", "email", "password")}),
        ("Permissions", {"fields": ("is_staff", "is_active", "groups", "user_permissions")})
    )
    add_fieldsets = (
        (None, {
            "classes": ("wide", ),
            "fields": (
                "username", "email", "password1", "password2", "is_staff",
                "is_active","groups", "user_permissions"
            )}
        ),
    )
    search_fields = ("username", "email",)
    ordering = ("username", "email")

admin.site.register(CustomUser, CustomUserAdmin)