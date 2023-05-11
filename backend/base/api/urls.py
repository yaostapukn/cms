from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('content/', views.ContentList.as_view()),
    path('content/<int:pk>/', views.ContentListDetail.as_view()),
    path('public/', views.PublicContentList.as_view()),
    path('public/<int:pk>/', views.PublicContentListDetail.as_view()),
    path('public/comments/<int:pk>/', views.PublicCommentsList.as_view()),
    # path('content/comments/<int:pk>/', views.CommentsDestroyDetail.as_view()),

]   