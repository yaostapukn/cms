# Generated by Django 4.2 on 2023-05-05 23:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_comments'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comments',
            name='email',
            field=models.CharField(max_length=50),
        ),
    ]
