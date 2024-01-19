import React from "react";
import "./RadioGroup.css";


const RadioGroup = ( items ) => {
  console.log(items,"items in radio")
  return (
    <div>
      {/* Hello */}
         <input type="radio" name="item" value={items.items} /> 
      <label>{items.items}</label> 
    </div>
    
  );
};

export default RadioGroup;
