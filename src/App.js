
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

  const traverseRecursive = (x,panel)=>{
    if(x.childControls.length){
      x.childControls.forEach((data)=>{
        traverseRecursive(data,panel);
      })  
    }
    else{
      panel.push(x);
    }
  }
  b.forEach((data)=>{
    const panel = [];
    traverseRecursive(data,panel);
    renderdata.push(panel);
  })
  // renderdata.reverse();
  // b.reverse();


  const recursiveReverse = (b)=>{
      b.reverse()
      for(let i = 0; i < b.length;i++){
        if(b[i].childControls.length)
        recursiveReverse(b[i].childControls)
      }
    
  }

  recursiveReverse(b);
  
  console.log("renderdata",renderdata);
  return (
    // < className="App">
    //   {renderdata.map((data)=>{
    //    return <div>{data.map((renderComp)=>{
    //     return <Panel item={renderComp} />
    //    })}</div>
    //   })}
      <div>{b.map(ele=>{ 
        return<div className="panel-container"><NestedComponents data = {ele} key={ele.name} /> </div>}
        )}</div>
   

   


  

    
  );
}

export default App;
