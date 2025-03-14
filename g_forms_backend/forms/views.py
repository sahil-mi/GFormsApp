from django.shortcuts import get_object_or_404, render
from rest_framework import viewsets
from rest_framework.response import Response
# Create your views here.
from.models import Form
from.serializers import FormSerializer,FormCreateSerializers

class FormsView(viewsets.ViewSet):

    queryset = Form.objects.all()
    serializer_class = FormSerializer

    def list(self,request):
        pass
    
    def retrive(self,request,pk=None):
        form_object = get_object_or_404(self.queryset,pk=pk)
        serialized_data = self.serializer_class(form_object).data
        return Response(serialized_data)
    

    def create(self,request):
        serializer = FormCreateSerializers(data=request.data)
        if serializer.is_valid():
            form_instance = serializer.create(serializer.data)
            form_name = form_instance.name
            return Response({"message":f"{form_name} Create Successs"})
        else:
            return Response({"message":"Create Failed","errors":serializer.errors})
