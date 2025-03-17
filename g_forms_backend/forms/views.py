from django.shortcuts import get_object_or_404, render
from rest_framework import viewsets
from rest_framework.response import Response
# Create your views here.
from.models import Answer, Form
from.serializers import AnswerCreateSerializer, FormSerializer,FormCreateSerializers

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
            link = f"http://localhost:5173/?pk={form_instance.id}/"
            return Response({"message":f"{form_name} Create Successs","link":link})
        else:
            return Response({"message":"Create Failed","errors":serializer.errors})



class FormsAnswering(viewsets.ViewSet):
    queryset = Answer.objects.all()
   

    def create(self,request):
        serializer = AnswerCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.create(serializer.data)
            return Response({"message":"Answer Submitted Successfully"})
        else:
            return Response({"message":"Create Failed","errors":serializer.errors})

    