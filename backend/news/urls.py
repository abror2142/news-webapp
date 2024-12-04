from django.urls import path

from .views import all_categories, all_posts, upload_image, post_view


urlpatterns = [
    path('all/', all_posts, name='all_posts'),
    path('category/', all_categories, name='all_categories'),  
    path('upload-image/', upload_image, name='upload_image'),
    path('<int:id>/', post_view, name='post_view')
]
                   