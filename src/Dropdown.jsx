import React from "react";
import "./Dropdown.css";


const Dropdown = (items, name ) => {
  return (
    <div>
      <label>
        <div className="dropdown">{name}</div>
        <select className="select-tag">
          {items.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
