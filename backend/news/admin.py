from django.contrib import admin

from .models import Post, Category, Tag, PostCategory, PostTag

admin.site.register(Post)
admin.site.register(Tag)
admin.site.register(Category)
admin.site.register(PostCategory)
admin.site.register(PostTag)