import React from "react";

import { CheckBox } from "../../components/checkBox";
import StandardTextBox from "../../components/standardTextBox";

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
