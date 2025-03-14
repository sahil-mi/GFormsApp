import { useState } from "react";
import {
  Button,
  CheckBox,
  SelectBox,
  StandardTextBox,
  Switch,
} from "../../components/basicComponents";
import "./style.css";

const optionsList = [
  { name: "Short answer", value: "0" },
  { name: "Multiple choice", value: "1" },
];

const Forms = () => {
  const [state, setState] = useState({
    name: "Untitled form",
    description: "",
  });

  const [questions, setQuestions] = useState([
    {
      question: "Please share your thoughts:",
      type_question: "0",
      is_required: false,
      answer: "Your service is excellent",
      options: [],
    },
  ]);

  const onChange = (e) => {
    if (e) {
      console.log(e);

      let name = e.target.name;
      let value = e.target.value;

      setState({ ...state, [name]: value });
    }
  };

  const questionOnChange = (e, index) => {
    console.log(e, index);

    if (e) {
      let name = e.target.name;
      let value = e.target.value;
      let new_questions = [...questions];
      new_questions[index][name] = value;
      setQuestions(new_questions);
    }
  };

  const questionToggleChange = (name, index) => {
    let new_questions = [...questions];
    let value = !new_questions[index][name];
    new_questions[index][name] = value;
    setQuestions(new_questions);
  };

  const addNewOption = (index, is_other = false) => {
    console.log(is_other, "is_other");

    let new_questions = [...questions];
    let value = `Option ${new_questions[index].options.length + 1}`;
    if (is_other) {
      value = "other...";
    }
    new_questions[index].options.push({
      option: value,
      is_answer: false,
      is_other,
    });
    new_questions[index].is_other = is_other;
    setQuestions(new_questions);
  };

  // const optionOnChange = (e, index, opIndex) => {
  //   if (e) {
  //     let name = e.target.name;
  //     let value = e.target.value;
  //     console.log(value);

  //     let new_questions = [...questions];
  //     let new_options = [...new_questions[index].options];
  //     new_options[opIndex][name] = value;
  //   }
  // };

  const optionOnChange = (e, index, opIndex) => {
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

  const onPublish = async () => {
    let payload = {
      ...state,
      questions,
    };

    const response = await fetch("http://127.0.0.1:8000/api/forms/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  };

  console.log(questions, "~~~questions");
  return (
    <section>
      {/*--------------------- ---Navbar--------------------------- */}
      <nav>
        <div className="publish-div">
          <Button
            text="Publish"
            bg="rgb(103, 58, 183)"
            color="white"
            height="40px"
            width="150px"
            onClick={onPublish}
          />
        </div>
      </nav>
      {/*---------------------------- Main Body-------------------- */}
      <section className="main-body">
        <div className="form-box-list">
          {/* ================head section=============== */}

          <div className="form-box-head">
            <div className="form-head-top"></div>
            <div style={{ display: "flex" }}>
              <div className="form-head-left"></div>

              <div className="form-head-inputs">
                <StandardTextBox
                  name="name"
                  onChange={onChange}
                  value={state.name}
                  fontSize="24pt"
                />
                <StandardTextBox
                  name="description"
                  onChange={onChange}
                  value={state.description}
                  placeholder="Form description"
                  fontSize="14px"
                />
              </div>
            </div>
          </div>
          {/* ===================ITEMS=================== */}

          {questions.map((i, index) => (
            <div className="form-box-item">
              <div className="form-box-item-line-1">
                <StandardTextBox
                  index={index}
                  name="question"
                  onChange={questionOnChange}
                  value={i.question}
                  fontSize="16px"
                  width="400px"
                />
                <SelectBox
                  index={index}
                  name="type_question"
                  onChange={questionOnChange}
                  value={i.type_question}
                  options={optionsList}
                />
              </div>

              {/*-------------- Short answer section------------- */}
              {i.type_question === "0" ? (
                <div className="form-box-item-line-2">
                  <StandardTextBox
                    index={index}
                    name="answer"
                    onChange={questionOnChange}
                    value={""}
                    fontSize="16px"
                    width="400px"
                    placeholder="Short answer text"
                    disabled={true}
                  />
                </div>
              ) : (
                //------------ Multiple choice section---------------------
                <div className="form-box-item-line-2">
                  {i.options.map((op, opIndex) => (
                    <div className="option-div">
                      <CheckBox label={op.option} showLabel={false} />
                      <StandardTextBox
                        value={op.option}
                        fontSize="14px"
                        width="100%"
                        color="black"
                        index={index}
                        opIndex={opIndex}
                        name="option"
                        onChange={optionOnChange}
                      />
                    </div>
                  ))}

                  <div className="add-option-div">
                    <div>
                      <CheckBox disabled={true} showLabel={false} />
                    </div>
                    <div>
                      <StandardTextBox
                        index={index}
                        value=""
                        placeholder="Add option"
                        fontSize="14px"
                        width="100px"
                        onClick={addNewOption}
                      />
                    </div>

                    {i?.is_other === true ? null : (
                      <>
                        <div>
                          <span style={{ marginLeft: "10px" }}>or</span>
                        </div>
                        <div>
                          <Button
                            index={index}
                            text={"Add 'other'"}
                            bg="#fff"
                            color="#1a73e8"
                            height="40px"
                            width="100px"
                            onClick={() => addNewOption(index, true)}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              <div className="options-menu">
                <div>
                  <span>ADD NEW</span>
                </div>
              </div>

              <div className="form-box-item-line-3">
                <Switch
                  index={index}
                  name="is_required"
                  onChange={questionToggleChange}
                  value={i.is_required}
                  label="Required"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Forms;
