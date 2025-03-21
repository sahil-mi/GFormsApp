import React from "react";

import StandardTextBox from "../../components/standardTextBox";

export const ShortAnswerSection = ({
  questionItem,
  questionIndex,
  handleChange,
  disabled,
}) => {
  return (
    <div className="form-box-item-line-2">
      <StandardTextBox
        index={questionIndex}
        name="answer"
        onChange={(e) => handleChange(e, questionIndex)}
        value={questionItem.answer}
        fontSize="16px"
        width="400px"
        placeholder="Short answer text"
        disabled={disabled}
      />
    </div>
  );
};
