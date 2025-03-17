import React, { useEffect, useState } from "react";
import CreateForm from "./createForm";
import { getFormData, publishForm } from "./api";
import FormView from "./formView";

const NewForms = () => {
  //From url taking form uniq id
  const url = new URL(window.location.href);
  const formUniqID = url.searchParams.get("pk");

  const [state, setState] = useState<FormState>({
    name: "Untitled form",
    description: "",
  });

  const [questions, setQuestions] = useState<Question[]>([
    {
      question: "Untitled Question",
      type_question: "0",
      is_required: false,
      answer: "",
      is_other: false,
      options: [],
    },
  ]);

  const handleTitleAndDescription = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (e) {
      let name = e.target.name;
      let value = e.target.value;

      setState({ ...state, [name]: value });
    }
  };

  const handleQuestion = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    if (e) {
      let name = e.target.name;
      let value = e.target.value;
      let new_questions = [...questions];
      new_questions[index][name] = value;
      setQuestions(new_questions);
    }
  };

  const handleQuestionRequiredToggle = (name: string, index: number): void => {
    let new_questions = [...questions];
    let value = !new_questions[index][name];
    new_questions[index][name] = value;
    setQuestions(new_questions);
  };

  const addNewOption = (index: number, is_other = false): void => {
    let new_questions = [...questions];
    let value = is_other
      ? "other..."
      : `Option ${new_questions[index].options.length + 1}`;
    new_questions[index].options.push({
      option: value,
      is_answer: false,
      is_other,
    });
    new_questions[index].is_other = is_other;
    setQuestions(new_questions);
  };

  const handleOptions = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    opIndex: number
  ): void => {
    if (e) {
      const { name, value } = e.target;

      // Create a deep copy of the questions array
      const new_questions = [...questions];

      // Update the specific option within the specific question
      new_questions[index] = {
        ...new_questions[index],
        options: new_questions[index].options.map(
          (option, idx) =>
            idx === opIndex && option.is_other !== true
              ? { ...option, [name]: value } // Update the specific option
              : option // Keep other options unchanged
        ),
      };

      // Update the state with the new questions array
      setQuestions(new_questions);
    }
  };

  const addNewQuestion = (): void => {
    let new_questions = [...questions];
    new_questions.push({
      question: "Untitled Question",
      type_question: "0",
      is_required: false,
      answer: "",
      options: [],
      is_other: false,
    });
    setQuestions([...new_questions]);
  };

  const handleClickPublishButton = (): void => {
    let payload = {
      ...state,
      questions,
    };
    publishForm(payload);
  };

  const FetchFormData = async (): Promise<void> => {
    if (formUniqID) {
      let res_data = await getFormData(formUniqID);
      if (res_data) {
        setState({ name: res_data.name, description: res_data.description });
        setQuestions([...res_data.questions]);
      }
    }
  };

  useEffect(() => {
    if (formUniqID) {
      FetchFormData();
    }
  }, []);

  console.log(questions, "<<<<<<questions--------------");

  return (
    <section>
      {formUniqID ? (
        <FormView questions={questions} state={state} />
      ) : (
        <CreateForm
          questions={questions}
          handleTitleAndDescription={handleTitleAndDescription}
          state={state}
          handleClickPublishButton={handleClickPublishButton}
          handleQuestion={handleQuestion}
          handleOptions={handleOptions}
          addNewQuestion={addNewQuestion}
          addNewOption={addNewOption}
          handleQuestionRequiredToggle={handleQuestionRequiredToggle}
        />
      )}
    </section>
  );
};

export default NewForms;
