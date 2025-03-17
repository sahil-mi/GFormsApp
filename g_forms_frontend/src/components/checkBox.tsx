import { useState } from "react";

export const CheckBox = (props) => {
  const { disabled, label, showLabel } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container">
      <input
        id="custom-checkbox"
        className="checkbox-input"
        checked={isChecked}
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
