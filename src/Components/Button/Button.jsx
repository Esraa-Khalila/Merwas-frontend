import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div>
      <button 
        type="button"
        className={"btn " + props.classes }
      >
        {props.text}
      </button>
    </div>
  );
}

export default Button;
