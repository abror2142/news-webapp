from django.urls import path

from .views import all_categories, all_posts, upload_image


urlpatterns = [
    path('all/', all_posts, name='all_posts'),
    path('category/', all_categories, name='all_categories'),  
    path('upload-image/', upload_image, name='upload_image'),  
]
                   