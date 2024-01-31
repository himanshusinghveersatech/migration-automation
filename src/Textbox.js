import React from "react";
import "./Textbox.css";



function TextBox(item) {
  const styleLabel = { width: item.width ? item.width : null };
  return (
    <div class="col-md-12">
      <label>
      
          {item.item}
        
        </label>
        <input
          className={item.type == "label" ? "no-input" : "text-input"}
          type="text"
          name="item"
          placeholder={"Type here..."}
        />
     </div>
     
  );
};

export default TextBox;
