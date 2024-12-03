from django.db.models.signals import pre_save
from django.dispatch import receiver

from .models import Post
from .utils import get_image_path_from_html, delete_file


@receiver(pre_save, sender=Post)
def handle_post_pre_save_signal(instance, **kwargs):
    if instance.pk is not None:
        post = Post.objects.get(pk=instance.pk)
        post_image_list = get_image_path_from_html(post.content)
        instance_image_list = get_image_path_from_html(instance.content)
        
        for img_path in post_image_list:
            if img_path not in instance_image_list:
                img_path = img_path[1:]
                delete_file(img_path)