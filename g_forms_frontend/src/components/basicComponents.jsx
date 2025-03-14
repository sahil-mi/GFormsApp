import { useState } from "react";
import "./style.css";
export const Button = (props) => {
  const { text, bg, color, height, width, onClick, index } = props;

  return (
    <button
      style={{
        backgroundColor: bg ? bg : "blue",
        color: color ? color : "white",
        height: height ? height : "",
        width: width ? width : "",
      }}
      className="btn"
      onClick={() => onClick(index)}
    >
      <span className="btn-span">{text ? text : "button"}</span>
    </button>
  );
};

export const StandardTextBox = (props) => {
  const {
    fontWeight,
    fontSize,
    placeholder,
    value,
    onChange,
    width,
    height,
    color,
    name,
    index,
    onClick,
    disabled,
    opIndex,
  } = props;

  return (
    <div className="std-input-box-div" style={{ width: width ? width : null }}>
      <input
        style={{
          fontWeight: fontWeight ? fontWeight : 400,
          fontSize: fontSize ? fontSize : "16px",
          color: color ? color : "",
        }}
        className="std-input-box"
        type="text"
        value={value}
        onChange={(e) => onChange(e, index, opIndex)}
        placeholder={placeholder}
        name={name}
        onClick={() => (onClick ? onClick(index) : null)}
        disabled={disabled}
      />
    </div>
  );
};

export const SelectBox = (props) => {
  const { name, options, onChange, index } = props;

  return (
    <div className="select-box-div">
      <select
        className="select-box"
        name={name}
        id={name}
        onChange={(e) => onChange(e, index)}
      >
        {options.map((item, index) => (
          <option className="select-box-option" value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

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
        disabled
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
