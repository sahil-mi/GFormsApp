import React from "react";
import Button from "../../components/button";
import StandardTextBox from "../../components/standardTextBox";
import "./style.css";
import { QuestionsBox } from "./questionsBox";
import { Switch } from "../../components/switch";

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
    handleQuestionRequiredToggle,
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
            <div className="form-box-item">
              {/* Question box */}
              <QuestionsBox
                questionItem={questionItem}
                questionIndex={questionIndex}
                handleQuestion={handleQuestion}
                handleOptions={handleOptions}
                addNewQuestion={addNewQuestion}
                addNewOption={addNewOption}
              />

              {/* Add New Question button */}
              {questions.length - 1 === questionIndex ? (
                <div className="options-menu">
                  <div>
                    <Button
                      text="Add New"
                      bg="#fff"
                      color="black"
                      height="40px"
                      width="150px"
                      onClick={addNewQuestion}
                    />
                  </div>
                </div>
              ) : null}

              {/* Required toggle button */}
              <div className="form-box-item-line-3">
                <Switch
                  index={questionIndex}
                  name="is_required"
                  onChange={handleQuestionRequiredToggle}
                  value={questionItem.is_required}
                  label="Required"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CreateForm;
