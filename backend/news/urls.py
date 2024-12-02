from django.urls import path

from .views import all_categories, latest_posts


urlpatterns = [
    path('latest/', latest_posts, name='latest_posts'),
    path('category/', all_categories, name='all_categories'),    
]
