import React from "react";
import "./Panel.css";
import RadioGroup from "../RadioGroup";
import TextBox from "../Textbox";
import Dropdown from "../Dropdown";



function Panel(props) {
  console.log("",props.item)
  return (
    <div>

      {props.item && props.item.type == "radioButton" &&  <RadioGroup items={props.item.name} key={props.item.type}></RadioGroup>}
      {props.item && props.item.type == "dropdown" &&  <Dropdown items={props.item.fields} name={props.item.name}></Dropdown>}
      {props.item && props.item.type == "text" && <TextBox item={props.item.name} key="item.name"></TextBox>}
      {props.item && props.item.type == "button" && <button>{props.item.name}</button>}
      {props.item && props.item.type == "checkbox" && <div>     <input type="checkbox" name="item"  /> 
      <label>{props.item.name}</label>  </div>}
      {/* {props.item  && props.item.type == "radioButton" ? (
              <RadioGroup items={props.item.name} key={props.item.type}></RadioGroup>
            ) : props.item.type == "dropdown" ? (
              <Dropdown items={props.item.fields} name={props.item.name}></Dropdown>
            ) : props.item.type == "button" ? <button>{props.item.name}</button>: (
              <TextBox item={props.item} key="item.name"></TextBox>
            )} */}
    
      {/* <div className="bottom-right-text">{foot}</div> */}
    </div>
  )
}

export default Panel;