import React from "react";
import { QuestionsBox } from "./questionsBox";
import StandardTextBox from "../../components/standardTextBox";
import { QuestionsViewBox } from "./questionsViewBox";

const FormView: React.FC<FormView> = (props) => {
  const { state, questions } = props;
  return (
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
                //   onChange={handleTitleAndDescription}
                value={state.name}
                fontSize="24pt"
              />
              <StandardTextBox
                name="description"
                //   onChange={handleTitleAndDescription}
                value={state.description}
                placeholder="Form description"
                fontSize="14px"
              />
            </div>
          </div>
        </div>

        {/* ===================ITEMS=================== */}
        {questions.map((questionItem, questionIndex) => (
          <>
            <QuestionsViewBox
              questionItem={questionItem}
              questionIndex={questionIndex}
            />
          </>
        ))}
      </div>
    </section>
  );
};

export default FormView;
