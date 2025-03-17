import React from "react";
import { useState } from "react";

export const CheckBox = (props) => {
  const { checked, disabled, label, showLabel, handleToggle } = props;
  // const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="checkbox-container">
      <input
        id="custom-checkbox"
        className="checkbox-input"
        checked={checked}
        onChange={handleToggle}
        type="checkbox"
        disabled={disabled}
      />
      {showLabel === false ? null : (
        <label
          className={disabled ? "checkbox-disabled-label" : "checkbox-label"}
          htmlFor="custom-checkbox"
        >
          {label}
        </label>
      )}
    </div>
  );
};
