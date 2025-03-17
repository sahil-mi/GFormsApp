interface FormState {
  name: string;
  description: string;
}

interface Option {
  option: string;
  is_answer: boolean;
  is_other: boolean;
}

interface Question {
  question: string;
  type_question: string;
  is_required: boolean;
  answer: string;
  is_other: boolean;
  options: Option[];
}

interface CreateFormProps {
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

interface publishFormPayload {
  name: string;
  description: string;
  questions: Question[];
}

interface FormResponseData {
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

interface MultipleChoiceSectionProps {
  optionItem: number; //Option;
  optionIndex: number;
  questionIndex: number;
}

interface QuestionsBoxProps {
  questionItem: Question;
  questionIndex: number;
  handleQuestion?: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleOptions?: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    opIndex: number
  ) => void;
  addNewQuestion?: () => void;
  addNewOption?: (index: number, is_other: boolean) => void;
}

interface FormView {
  questions: Question[];
  state: FormState;
}
