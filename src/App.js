
import './App.css';
import { a } from './newmock';

import NestedComponents from './NestedComponents';
import JsonToForm from 'json-reactform';
import jsondoc from '../src/jsondoc';

// function render()
function App() {
  const b = a;  
  
  const submit = (params) => {
    console.log(params);
  }
  ;
  return (
    <div className="App">
      
      {b.map(ele=>{ 
      return<div className="panel-container"><NestedComponents data = {ele} key={ele.name} /> </div>}
      
      )}
      <h1>Recursive rendering</h1>

  


  

    </div>
  );
}

export default App;
