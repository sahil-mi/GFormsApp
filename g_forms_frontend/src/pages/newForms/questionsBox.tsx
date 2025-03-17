import React from "react";
import Button from "../../components/button";
import StandardTextBox from "../../components/standardTextBox";
import SelectBox from "../../components/selectBox";
import { MultipleChoiceSection } from "./multipleChoiceSection";
import { ShortAnswerSection } from "./shortAnswerSection";
import { CheckBox } from "../../components/checkBox";
const questionTypes = [
  { name: "Short answer", value: "0" },
  { name: "Multiple choice", value: "1" },
];
export const QuestionsBox: React.FC<QuestionsBoxProps> = ({
  questionItem,
  questionIndex,
  handleQuestion,
  handleOptions,
  addNewQuestion,
  addNewOption,
}) => {
  return (
    <>
      {/* QUESTION AND QUESTION TYPE */}
      <div className="form-box-item-line-1">
        <StandardTextBox
          index={questionIndex}
          name="question"
          onChange={handleQuestion}
          value={questionItem?.question}
          fontSize="16px"
          width="400px"
        />
        <SelectBox
          index={questionIndex}
          name="type_question"
          onChange={handleQuestion}
          value={questionItem.type_question}
          options={questionTypes}
        />
      </div>

      {questionItem.type_question === "0" ? (
        //SHORT ANSWER
        <div className="form-box-item-line-2">
          <ShortAnswerSection
            questionItem={questionItem}
            questionIndex={questionIndex}
          />
        </div>
      ) : (
        //  MULTIPLE CHOICE
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
                />
              </div>
            ))}
            {/* ADD NEW OPTION */}
            <div className="add-option-div">
              <div>
                <CheckBox disabled showLabel={false} />
              </div>
              <div>
                <StandardTextBox
                  index={questionIndex}
                  value=""
                  placeholder="Add option"
                  fontSize="14px"
                  width="100px"
                  onClick={addNewOption}
                />
              </div>
              {/* ADD OPTION OTHER */}
              {questionItem?.is_other === true ? null : (
                <>
                  <div>
                    <span style={{ marginLeft: "10px" }}>or</span>
                  </div>
                  <div>
                    <Button
                      index={questionIndex}
                      text={"Add 'other'"}
                      bg="#fff"
                      color="#1a73e8"
                      height="40px"
                      width="100px"
                      onClick={() => addNewOption(questionIndex, true)}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
