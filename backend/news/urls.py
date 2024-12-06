from django.urls import path

from .views import all_categories, home_view, upload_image, post_view, category_posts, tag_page_view


urlpatterns = [
    path('home/', home_view, name='home_view'),
    path('<int:id>/', post_view, name='post_view'),
    path('layout/', all_categories, name='all_categories'),  
    path('category/<int:pk>/', category_posts, name='category_posts'),  
    path('upload-image/', upload_image, name='upload_image'),
    path('tag/', tag_page_view, name="tag_page")
]
                   