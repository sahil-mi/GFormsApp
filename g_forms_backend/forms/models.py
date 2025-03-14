from django.db import models

# Create your models here.
class Form (models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()




QUESTION_TYPES = [
    ("0","Short Answer"),
    ("1","Multiple Choice")
]

class Question (models.Model):
    question = models.CharField(max_length=250)
    type_question = models.CharField(max_length=1,choices=QUESTION_TYPES)
    is_required = models.BooleanField(default=False)
    answer =  models.CharField(max_length=100)
    form = models.ForeignKey(Form,on_delete=models.CASCADE)


class Option(models.Model):
    option = models.CharField(max_length=100)
    is_answer = models.BooleanField(default=False)
    question=  models.ForeignKey(Question,on_delete=models.CASCADE)

