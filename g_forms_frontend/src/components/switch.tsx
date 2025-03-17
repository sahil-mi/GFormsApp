import React from "react";

export const Switch = (props) => {
  const { label, onChange, value, name, index } = props;

  return (
    <div>
      <span className="toggle-switch-label">{label} </span>
      <label className="toggle-switch">
        <input
          name={name}
          type="checkbox"
          checked={value}
          onChange={() => onChange(name, index)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};
