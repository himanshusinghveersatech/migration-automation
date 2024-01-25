import React from "react";
import "./Dropdown.css";


const Dropdown = (items) => {
  const x = items.items.properties.Items;
  return (
    <div class="dropdown">
      <button class="dropbtn">
        Dropdown
        <div id="myDropdown" class="dropdown-content"> 
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </button>
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

export default Dropdown;
