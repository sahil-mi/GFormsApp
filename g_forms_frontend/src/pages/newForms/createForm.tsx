import React from "react";
import Button from "../../components/button";
import StandardTextBox from "../../components/standardTextBox";
import SelectBox from "../../components/selectBox";
import "./style.css";
import { CheckBox } from "../../components/checkBox";
const questionTypes = [
  { name: "Short answer", value: "0" },
  { name: "Multiple choice", value: "1" },
];

export const ShortAnswerSection = ({ questionItem, questionIndex }) => {
  return (
    <div className="form-box-item-line-2">
      <StandardTextBox
        index={questionIndex}
        name="answer"
        // onChange={questionOnChange}
        value={questionItem.answer}
        fontSize="16px"
        width="400px"
        placeholder="Short answer text"
        // disabled={pk ? false : true}
        disabled
      />
    </div>
  );
};

// export const MultipleChoiceSection: React.FC<MultipleChoiceSectionProps>  = ({
export const MultipleChoiceSection = ({
  questionIndex,
  optionItem,
  optionIndex,
  handleOptions,
}) => {
  return (
    <>
      <CheckBox label={optionItem.option} showLabel={false} />
      <StandardTextBox
        value={optionItem.option}
        fontSize="14px"
        width="100%"
        color="black"
        index={questionIndex}
        opIndex={optionIndex}
        name="option"
        onChange={handleOptions}
      />
    </>
  );
};

export const QuestionsBox: React.FC<QuestionsBoxProps> = ({
  questionItem,
  questionIndex,
  handleQuestion,
  handleOptions,
  addNewQuestion,
  addNewOption,
}) => {
  return (
    <div className="form-box-item">
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
    </div>
  );
};

const CreateForm: React.FC<CreateFormProps> = (props) => {
  let {
    handleClickPublishButton,
    state,
    handleTitleAndDescription,
    questions,
    handleQuestion,
    handleOptions,
    addNewQuestion,
    addNewOption,
  } = props;
  return (
    <div>
      <nav>
        <div className="publish-div">
          <Button
            text="Publish"
            bg="rgb(103, 58, 183)"
            color="white"
            height="40px"
            width="150px"
            onClick={handleClickPublishButton}
          />
        </div>
      </nav>

      <section className="main-body">
        <div className="form-box-list">
          {/* ================head section=============== */}
          <div className="form-box-head">
            <div className="form-head-top"></div>
            <div style={{ display: "flex" }}>
              {/* <div className="form-head-left"></div> */}

              <div className="form-head-inputs">
                <StandardTextBox
                  name="name"
                  onChange={handleTitleAndDescription}
                  value={state.name}
                  fontSize="24pt"
                />
                <StandardTextBox
                  name="description"
                  onChange={handleTitleAndDescription}
                  value={state.description}
                  placeholder="Form description"
                  fontSize="14px"
                />
              </div>
            </div>
          </div>
          {/* ===================ITEMS=================== */}

          {questions.map((questionItem, questionIndex) => (
            <QuestionsBox
              questionItem={questionItem}
              questionIndex={questionIndex}
              handleQuestion={handleQuestion}
              handleOptions={handleOptions}
              addNewQuestion={addNewQuestion}
              addNewOption={addNewOption}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CreateForm;
