import React from "react";
import "./Panel.css";
import RadioGroup from "../RadioGroup";
import TextBox from "../Textbox";
import Dropdown from "../Dropdown";



function Panel(props) {
  console.log("",props.item)
  return (
    <>

      {props.item && props.item.type === "radioButton" &&  <RadioGroup items={props.item} key={props.item.type}></RadioGroup>}
      {props.item && props.item.type === "dropdown" &&  <Dropdown items={props.item} name={props.item.properties.LabelText}></Dropdown>}
      {props.item && props.item.type === "textbox" && <TextBox item={props.item.properties.LabelText || props.item.name} key="item.name"></TextBox>}
      {props.item && props.item.type === "button" && <div className="textstyle"><button className="button-text">{props.item.name}</button></div>}
      {props.item && props.item.type === "checkbox" && <div>     <input type="checkbox" name="item"  /> 
      {props.item && props.item.type === "Link" && <div>{props.item.properties.LabelText }</div>}
      <label>{props.item.name}</label>  </div>}
      {/* {props.item  && props.item.type == "radioButton" ? (
              <RadioGroup items={props.item.name} key={props.item.type}></RadioGroup>
            ) : props.item.type == "dropdown" ? (
              <Dropdown items={props.item.fields} name={props.item.name}></Dropdown>
            ) : props.item.type == "button" ? <button>{props.item.name}</button>: (
              <TextBox item={props.item} key="item.name"></TextBox>
            )} */}
    
      {/* <div className="bottom-right-text">{foot}</div> */}
    </>
  
  )
}

export default Panel;
