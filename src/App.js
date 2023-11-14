import './index.css';
import Employee from './components/employee';
import { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';
import Addemployee from './components/Addemployee';
import Editemployee from './components/Editemployee';
import Header from './components/Header';
import Employees from './pages/Employees';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Customers from './pages/Coustomers';
 
function App() {
  
  return (
  <BrowserRouter>
    <Header>
      
          <Routes>
            <Route path='/employee' element={<Employees/>}/>
            <Route path='/coustomer' element={<Customers/>}/>
          </Routes>
      
    </Header>
   </BrowserRouter>
  );
}

export default App;
