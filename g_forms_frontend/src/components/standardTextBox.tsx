import React from "react";
const StandardTextBox = (props) => {
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

export default StandardTextBox;
