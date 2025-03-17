export interface FormState {
  id?: number;
  name: string;
  description: string;
}

interface Option {
  id?: number;
  option: string;
  is_answer: boolean;
  is_other: boolean;
}

export interface Question {
  id?: number;
  question: string;
  type_question: string;
  is_required: boolean;
  answer: string | boolean;
  is_other: boolean;
  options: Option[];
}

export interface CreateFormProps {
  handleClickPublishButton: () => void;
  state: FormState;
  questions: Question[];
  handleTitleAndDescription: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleQuestion: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleOptions: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    opIndex: number
  ) => void;
  addNewQuestion: () => void;
  addNewOption: (index: number, is_other: boolean) => void;
  handleQuestionRequiredToggle: (name: string, index: number) => void;
}

export interface publishFormPayload {
  name: string;
  description: string;
  questions: Question[];
}

export interface FormResponseData {
  id: number;
  questions: {
    id: number;
    question: string;
    type_question: string;
    is_required: boolean;
    answer: string;
    is_other: boolean;
    options: {
      id: number;
      option: string;
      is_answer: boolean;
      question: number;
      is_other: boolean;
    }[];

    form: number;
  }[];
  name: string;
  description: string;
}

export interface MultipleChoiceSectionProps {
  optionItem: number; //Option;
  optionIndex: number;
  questionIndex: number;
}

export interface QuestionsBoxProps {
  questionItem: Question;
  questionIndex: number;
  handleQuestion: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleOptions: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    opIndex: number
  ) => void;
  addNewQuestion: () => void;
  addNewOption: (index: number, is_other: boolean) => void;
}

export interface FormViewProps {
  questions: Question[];
  state: FormState;
  handleShortAnswers: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleOptions: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    opIndex: number
  ) => void;
  handleMultipleChoiceAnswers: (
    questionIndex: number,
    optionIndex: number
  ) => void;
}

export interface AnswerInterface {
  question_id: number | string;
  answer: string;
}
