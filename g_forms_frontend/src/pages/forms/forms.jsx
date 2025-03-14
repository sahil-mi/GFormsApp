import {
  Button,
  CheckBox,
  SelectBox,
  StandardTextBox,
  Switch,
} from "../../components/basicComponents";
import "./style.css";
const Forms = () => {
  const optionsList = [
    { name: "Short answer", value: 0 },
    { name: "Multiple choice", value: 1 },
  ];

  const isShortAnswer = false;

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
                <StandardTextBox value="Untitled form" fontSize="24pt" />
                <StandardTextBox
                  value=""
                  placeholder="Form description"
                  fontSize="14px"
                />
              </div>
            </div>
          </div>
          {/* ===================ITEMS=================== */}
          <div className="form-box-item">
            <div className="form-box-item-line-1">
              <StandardTextBox
                fontSize="16px"
                value="Untitled Question"
                width="400px"
              />
              <SelectBox options={optionsList} />
            </div>

            {isShortAnswer ? (
              <div className="form-box-item-line-2">
                <StandardTextBox
                  fontSize="16px"
                  width="400px"
                  placeholder="Short answer text"
                />
              </div>
            ) : (
              <div className="form-box-item-line-2">
                <div className="option-div">
                  <CheckBox label="Option 1" showLabel={false} />
                  <StandardTextBox
                    value="Option 1"
                    fontSize="14px"
                    width="100%"
                    color="black"
                  />
                </div>
                <div className="add-option-div">
                  <div>
                    <CheckBox disabled={true} showLabel={false} />
                  </div>
                  <div>
                    <StandardTextBox
                      value=""
                      placeholder="Add option"
                      fontSize="14px"
                      width="100px"
                    />
                  </div>
                  <div>
                    <span style={{ marginLeft: "10px" }}>or</span>
                  </div>
                  <div>
                    <Button
                      text={"Add 'other'"}
                      bg="#fff"
                      color="#1a73e8"
                      height="40px"
                      width="100px"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="options-menu">
              <div>
                <span>ADD NEW</span>
              </div>
            </div>

            <div className="form-box-item-line-3">
              <Switch label="Required" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Forms;
