import './App.css';
import Employee from './components/employee';
import { useState } from 'react';
function App() {
  let [role , setRole] = useState('Intren');
  let showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? 
      <>
      <input type='text'onChange={ (e) => {
        setRole(e.target.value);
      }}/>
        <Employee name="Jack" role={role}/>
        <Employee name="MyaMya" />
        <Employee/>
      </>
         
       
       : <h2>Hello</h2>}
       
    </div>
  );
}

export default App;
