# Generated by Django 5.1.3 on 2024-12-03 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='image',
            field=models.ImageField(default=1, upload_to='post-main/'),
            preserve_default=False,
        ),
    ]