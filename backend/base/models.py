from django.db import models

#пост
class Content(models.Model):
    title = models.CharField(max_length=54)
    descr = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)
    cat = models.CharField(blank=True,  default='статья', max_length=25)
    #об авторе
    name = models.CharField(max_length=50,blank=True, default='без автора')

#комментарии
class Comments(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    comm_descr = models.TextField()
    created_at_comm = models.DateTimeField(auto_now_add=True, blank=True)
    #связь с content
    content = models.ForeignKey(Content, on_delete=models.CASCADE)

