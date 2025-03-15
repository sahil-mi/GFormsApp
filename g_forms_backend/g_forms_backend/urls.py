"""
URL configuration for g_forms_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from rest_framework.routers import DefaultRouter

from forms.views import FormsView


#setting router
router = DefaultRouter()
router.register(r'forms',FormsView,basename="forms")


urlpatterns = [
    path('admin/', admin.site.urls),

    #included the router in urlpatterns
    path('api/', include(router.urls)), 

    path('api/forms/', FormsView.as_view({'get': 'list'}), name='forms_list'),
    path('api/forms/', FormsView.as_view({'post': 'create'}), name='forms_create'),
    path('api/forms/<int:pk>/', FormsView.as_view({'get': 'retrive'}), name='forms_create'),
]
