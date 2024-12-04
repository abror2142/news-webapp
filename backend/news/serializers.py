from rest_framework import serializers

from .models import Post, Category, Tag
from bs4 import BeautifulSoup

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True)
    
    class Meta:
        model = Post
        fields = '__all__'

    def to_representation(self, instance):
        # Get the default representation
        data = super().to_representation(instance)
        
        base_url = "http://localhost:8000"
        
        # Add base_url to the 'image' field
        if 'image' in data and data['image']:
            data['image'] = f"{base_url}{data['image']}"
        
        # Modify the 'content' field to add base_url to all img src attributes
        if 'content' in data and data['content']:
            soup = BeautifulSoup(data['content'], 'html.parser')
            for img in soup.find_all('img', src=True):
                if img['src'].startswith('/'):
                    img['src'] = f"{base_url}{img['src']}"
            data['content'] = str(soup)
        
        return data


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'