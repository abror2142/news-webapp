from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response

from .models import Post, Category
from .serializers import PostSerializer, CategorySerializer


@api_view(['GET'])
def latest_posts(request: Request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def all_categories(request: Request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)