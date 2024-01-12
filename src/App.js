
import './App.css';
import { a } from './newmock';

import NestedComponents from './NestedComponents';

// function render()
function App() {
  const b = a;  
  
 
  ;
  return (
    <div className="App">
      {b.map(ele=>{ 
      return<NestedComponents data = {ele} key={ele.name} />}
      
      )}
      <h1>Recursive rendering</h1>
    </div>
  );
}

export default App;
