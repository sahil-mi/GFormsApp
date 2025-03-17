import React from "react";
import Button from "../../components/button";
import StandardTextBox from "../../components/standardTextBox";
import SelectBox from "../../components/selectBox";
import { MultipleChoiceSection } from "./multipleChoiceSection";
import { ShortAnswerSection } from "./shortAnswerSection";

export const QuestionsViewBox = (props) => {
  const {
    questionItem,
    questionIndex,
    handleShortAnswers,
    handleOptions,
    handleMultipleChoiceAnswers,
  } = props;

  return (
    <div className="form-box-item">
      {/* QUESTION AND QUESTION TYPE */}
      <div className="form-box-item-line-1">
        <StandardTextBox
          index={questionIndex}
          name="question"
          //   onChange={handleQuestion}
          value={questionItem?.question}
          fontSize="16px"
          width="400px"
        />
      </div>

      {questionItem.type_question === "0" ? (
        //===========SHORT ANSWER=========
        <div className="form-box-item-line-2">
          <ShortAnswerSection
            questionItem={questionItem}
            questionIndex={questionIndex}
            handleChange={handleShortAnswers}
            disabled={false}
          />
        </div>
      ) : (
        //=========MULTIPLE CHOICE==============
        <>
          {/*  OPTIONS SHOWING  */}
          <div className="form-box-item-line-2">
            {questionItem.options.map((optionItem, optionIndex) => (
              <div className="option-div">
                <MultipleChoiceSection
                  key={`${questionIndex}-${optionIndex}`}
                  optionItem={optionItem}
                  optionIndex={optionIndex}
                  questionIndex={questionIndex}
                  handleOptions={handleOptions}
                  checked={optionItem.is_answer}
                  handleMultipleChoiceAnswers={handleMultipleChoiceAnswers}
                  disabled={false}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
