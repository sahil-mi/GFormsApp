from rest_framework import serializers
from.models import *
"""
When user make post request the payload will be check and seriliaze
"""
class OptionCreateSerializers(serializers.Serializer):
    option = serializers.CharField()
    is_answer = serializers.BooleanField()



class FormCreateSerializers(serializers.Serializer):
    name = serializers.CharField()
    description = serializers.CharField()
    question = serializers.CharField()
    type_question = serializers.CharField()
    is_required = serializers.BooleanField()
    answer = serializers.CharField()

    options = OptionCreateSerializers(many=True,required=False)


    def create(self,validated_data):
        name = validated_data.get("name")
        description = validated_data.get("description")
        question = validated_data.get("question")
        type_question = validated_data.get("type_question")
        is_required = validated_data.get("is_required")
        answer = validated_data.get("answer")

        options = validated_data.get("options")

        form_instance = Form.objects.create(
            name = name,
            description = description
        )

        question_instance = Question.objects.create(
            question=question,
            type_question=type_question,
            is_required=is_required,
            answer=answer,
            form = form_instance
        )


        for item in options:
            Option.objects.create(
                option = item["option"],
                is_answer = item["is_answer"],
                question = question_instance
            )

        return form_instance


"""
When user rretrive data this will be serialize the data to json
"""
class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = "__all__"

class OptionSerializer(serializers.ModelSerializer):
    options = serializers.SerializerMethodField()
    
    class Meta:
        model = Option
        fields = "__all__"
    
    def get_options(self,question_data):
        options_queryset = serializers.SerializerMethodField()
        options_data = QuestionSerializer(options_queryset).data
        return options_data


class FormSerializer(serializers.ModelSerializer):
    questions = serializers.SerializerMethodField()
    
    class Meta:
        model = Form
        fields = "__all__"
    
    def get_questions(self,form_data):
        question_queryset = Question.objects.filter(form = form_data)
        question_data = QuestionSerializer(question_queryset,many=True).data
        return question_data
