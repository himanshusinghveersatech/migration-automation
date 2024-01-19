import React from "react";
import "./Textbox.css";



function TextBox(item) {
  const styleLabel = { width: item.width ? item.width : null };
  return (
    <div className="textBox" key={item.name}>
      <label>
        <div className="text-label" style={styleLabel}>
          {item.item}
        </div>
        <input
          className={item.type == "label" ? "no-input" : "text-input"}
          type="text"
          name="item"
          placeholder={"Search Text"}
        />
      </label>
    </div>
  );
};

export default TextBox;
