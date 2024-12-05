from django.db import models

from tinymce.models import HTMLField

class Category(models.Model):
    category_name = models.CharField(max_length=150)


    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.category_name
    

class Tag(models.Model):
    tag_name = models.CharField(max_length=150)

    def __str__(self):
        return self.tag_name
    

class PostType(models.TextChoices):
    NEWS = "NEWS", "News"
    INTERVIEW = "INTERVIEW", "Interview"
    PERSPECTIVE = "PERSPECTIVE", "PERSPECTIVE"
    

class Status(models.TextChoices):
    IN_REVIEW = "IN_REVIEW", "In Review"
    CHANGES_REQUIRED = "CHANGES_REQUIRED", "Changes Required"
    PUBLISHED = "PUBLISHED", "Published"


class Post(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to="post-main/")
    description = models.CharField(max_length=255)
    content = HTMLField() # WYSIWYG model format
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    post_type = models.CharField(max_length=20, choices=PostType)
    status = models.CharField(max_length=20, choices=Status)
    categories = models.ManyToManyField('Category', through='PostCategory', related_name='posts')
    tags = models.ManyToManyField('Tag', through='PostTag', related_name='posts')

    @property
    def category_set(self):
        return self.categories.all()
    
    def __str__(self):
        return self.title
    

class PostCategory(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = 'PostCategories'

    def __str__(self):
        return f"{self.category} {self.post}"
    

class PostTag(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.post} {self.tag}"
    

