from django.urls import path

from .views import all_categories, latest_posts, upload_image


urlpatterns = [
    path('latest/', latest_posts, name='latest_posts'),
    path('category/', all_categories, name='all_categories'),  
    path('upload-image/', upload_image, name='upload_image'),  
]
                   