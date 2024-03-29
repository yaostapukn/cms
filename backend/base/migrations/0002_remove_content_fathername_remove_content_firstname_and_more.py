# Generated by Django 4.2 on 2023-04-23 22:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='content',
            name='fatherName',
        ),
        migrations.RemoveField(
            model_name='content',
            name='firstName',
        ),
        migrations.RemoveField(
            model_name='content',
            name='lastName',
        ),
        migrations.AddField(
            model_name='content',
            name='cat',
            field=models.TextField(blank=True, default='статья', null=True),
        ),
        migrations.AddField(
            model_name='content',
            name='name',
            field=models.CharField(blank=True, default='без автора', max_length=50),
        ),
        migrations.AlterField(
            model_name='content',
            name='descr',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='content',
            name='title',
            field=models.CharField(max_length=54),
        ),
    ]
