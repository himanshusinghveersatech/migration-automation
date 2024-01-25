
import './App.css';
import { a } from './mock_data';

import NestedComponents from './NestedComponents';
import JsonToForm from 'json-reactform';
import jsondoc from '../src/jsondoc';
import { useEffect } from 'react';
import Panel from "./Panel/Panel";
// function render()
function App() {
  const b = a;  
  
  const submit = (params) => {
    console.log(params);
  }
  const renderdata = [];

  const traverseRecursive = (x)=>{
    if(x.childControls.length){
      x.childControls.forEach((data)=>{
        traverseRecursive(data);
      })  
    }
    else{
      renderdata.push(x);
    }
  }
  b.forEach((data)=>{
    traverseRecursive(data);
  })
  renderdata.reverse();
  console.log("renderdata",renderdata);
  return (
    <div className="App">
      {renderdata.map((data)=>{
       return  <Panel item={data} />
      })}
      {/* {b.map(ele=>{ 
      return<div className="panel-container"><NestedComponents data = {ele} key={ele.name} /> </div>}
      )}
   */}

   


  

    </div>
  );
}

export default App;
