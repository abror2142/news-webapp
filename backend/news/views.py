import os
import uuid

from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response

from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Post, Category, PostCategory
from .serializers import PostSerializer, CategorySerializer
from .utils import add_host_to_image_paths


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


@api_view(['GET'])
def all_posts(request: Request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def all_categories(request: Request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def post_view(request: Request, id: int):
    post = Post.objects.get(pk=id)
    serializer = PostSerializer(post)
    return Response(serializer.data)


@api_view(['GET'])
def category_posts(request: Request, pk: int):
    print(pk)
    category = get_object_or_404(Category, pk=pk)
    posts = Post.objects.filter(categories=category)
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)