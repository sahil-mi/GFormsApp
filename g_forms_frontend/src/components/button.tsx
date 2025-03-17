import React from "react";
import "./style.css";
const Button = (props) => {
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

export default Button;
