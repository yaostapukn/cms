# Generated by Django 4.2 on 2023-04-23 22:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_remove_content_fathername_remove_content_firstname_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='content',
            name='cat',
            field=models.CharField(blank=True, default='статья', max_length=25),
        ),
    ]
