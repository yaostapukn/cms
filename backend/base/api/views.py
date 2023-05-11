from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenObtainPairSerializer, ContentSerializer, CommentsSerializer
from rest_framework import generics
from base.models import Content, Comments
from rest_framework.permissions import IsAuthenticated

#токен
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
#пост
class ContentList(generics.ListCreateAPIView):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
    permission_classes = (IsAuthenticated, )

class ContentListDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
    permission_classes = (IsAuthenticated, )

class PublicContentList(generics.ListAPIView):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer

class PublicContentListDetail(generics.RetrieveAPIView):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer

#комментарии

class PublicCommentsList(generics.ListCreateAPIView):
    # queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
    def get_queryset(self):
        content_id = self.kwargs['pk']
        return Comments.objects.filter(content__id=content_id)

# class CommentsDestroyDetail(generics.RetrieveUpdateDestroyAPIView):
#     # queryset = Comments.objects.all()
#     serializer_class = CommentsSerializer
#     # permission_classes = (IsAuthenticated,)
#     def get_queryset(self):
#         content_id = self.kwargs['pk']
#         return Comments.objects.filter(content__id=content_id)
    
