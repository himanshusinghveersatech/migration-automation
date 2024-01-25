import React from "react";
import "./RadioGroup.css";


const RadioGroup = ( items ) => {
  console.log(items,"items in radio")
  console.log(items.items.properties.Items,"ssssssssssssssssss")
  const x = items.items.properties.Items;
  return (
    <div className="radioText">
   
      {x.map((data)=>{ return (
        <div className="radio-elements ">
        {console.log(data,"-----------")}
        <input type="radio"/>
        <label>{data.Discricption}</label>
        </div>
      )})}
    </div>
    
  );
};

export default RadioGroup;
