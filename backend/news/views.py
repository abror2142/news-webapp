import os
import uuid

from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response

from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Post, Category, PostCategory, Tag
from .serializers import PostSerializer, CategorySerializer
from .utils import add_host_to_image_paths


from .models import PostType

@api_view(['GET'])
def home_view(request: Request):
    latest_posts = Post.objects.all().order_by('-created_at')[:15]

    main_post_tag = Tag.objects.get(tag_name='Kun Xabari')
    main_post = Post.objects.filter(tags=main_post_tag).first()

    editors_choice_tag = Tag.objects.get(tag_name='Muharrir Tanlovi')
    editors_choice_posts = Post.objects.filter(tags=editors_choice_tag)

    breaking_news_tag = Tag.objects.get(tag_name='Dolzarb Mavzu')
    breaking_news_posts = Post.objects.filter(tags=breaking_news_tag)

    important_subject_tag = Tag.objects.get(tag_name='Muhim Xabarlar')
    important_subject_posts = Post.objects.filter(tags=important_subject_tag)

    perspective_posts = Post.objects.filter(post_type=PostType.PERSPECTIVE)

    data = {
        "latest_posts": PostSerializer(latest_posts, many=True).data,
        "main_post": PostSerializer(main_post).data,
        "editors_choice_posts": PostSerializer(editors_choice_posts, many=True).data,
        "important_subject_posts": PostSerializer(important_subject_posts, many=True).data,
        "breaking_news_posts": PostSerializer(breaking_news_posts, many=True).data,
        "persepective_posts": PostSerializer(perspective_posts, many=True).data,   
    }
    return Response(data)


@api_view(['GET'])
def all_categories(request: Request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def post_view(request: Request, id: int):
    post = Post.objects.get(pk=id)
    post_category = post.category_set.all()[0]

    recommended_posts = Post.objects.filter(categories=post_category).order_by('-created_at')[:15]

    latest_posts = Post.objects.all().order_by('-created_at')

    data = {
        "post":  PostSerializer(post).data,
        "recommended_posts": PostSerializer(recommended_posts, many=True).data,
        "latest_posts": PostSerializer(latest_posts, many=True).data,
    }
    
    return Response(data)


@api_view(['GET'])
def category_posts(request: Request, pk: int):
    print(pk)
    category = get_object_or_404(Category, pk=pk)
    posts = Post.objects.filter(categories=category)
    serializer = PostSerializer(posts, many=True)

    return Response(serializer.data)


@csrf_exempt
def upload_image(request):
    if request.method == "POST":
        file_obj = request.FILES['file']
        file_name_suffix = file_obj.name.split(".")[-1]
        if file_name_suffix not in ["jpg", "png", "gif", "jpeg", ]:
            return JsonResponse({"message": "Wrong file format"})

        # Necessary folder to store images
        path = os.path.join(settings.MEDIA_ROOT, 'post')

        # If there is no such path, create
        if not os.path.exists(path):
            os.makedirs(path)

        # Use uuid for image name
        id = uuid.uuid4()
        file_obj.name = str(id) + "." + file_name_suffix
        
        file_path = os.path.join(path, file_obj.name)

        file_url = f'{settings.MEDIA_URL}post/{file_obj.name}'

        if os.path.exists(file_path):
            return JsonResponse({
                "message": "file already exist",
                'location': file_url
            })

        with open(file_path, 'wb+') as f:
            for chunk in file_obj.chunks():
                f.write(chunk)

        return JsonResponse({
            'message': 'Image uploaded successfully',
            'location': file_url
        })
    return JsonResponse({'detail': "Wrong request"})

