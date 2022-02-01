import React from "react";
import "../App.css";

const RenderItem = (props) => {
  return (
    <div>
      <p
        style={{ textDecoration: props.marked ? "line-through" : null }}
        className="text"
        onClick={props.onClick}
      >
        {props.text}
      </p>
    </div>
  );
};

export default RenderItem;
