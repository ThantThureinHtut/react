import '../index.css';
import Employee from '../components/employee';
import { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';
import Addemployee from '../components/Addemployee';
import Editemployee from '../components/Editemployee';
import Header from '../components/Header';

function Employees() {
  let [role , setRole] = useState('Intren');
  const [employees , setEmployee] = useState(
    [
      { id:1 , name:"kyawkyaw" , role:"English Teacher" , img:"https://cdn.punchng.com/wp-content/uploads/2023/09/20144750/Umoh-Michael-e1695217670244.jpeg"} ,
      { id:2 , name:"MgMg" , role:"Programmer" , img:"https://shorturl.at/ejoM4"} ,
      { id:3 , name:"MyaMya" , role:"Software Enginner" , img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} ,
      { id:4 , name:"MyoGyi" , role:"Teacher" , img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} ,
      { id:5 , name:"kyawkyaw" , role:"English Teacher" , img:"https://cdn.punchng.com/wp-content/uploads/2023/09/20144750/Umoh-Michael-e1695217670244.jpeg"} ,
      { id:6 , name:"MgMg" , role:"Programmer" , img:"https://shorturl.at/ejoM4"} ,
      { id:7 , name:"MyaMya" , role:"Software Enginner" , img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} ,
      { id:8 , name:"MyoGyi" , role:"Teacher" , img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
    ]
  );

  function updateEmployee(id , newName , newRole){
    const updateEmployee = employees.map((employee) => {
        if(id === employee.id) {
          return {...employee , name : newName , role:newRole }
        }
        return employee;
    })
    setEmployee(updateEmployee)
  }
  function newEmployee(name , role , img) {
    const newemployee = {
      id: uuidv4(),
      name : name,
      role : role,
      img : img
    }

    setEmployee([...employees, newemployee])
  }

  let showEmployees = true;
  return (
   
    <div className="App bg-slate-300">
      {showEmployees ? 
      <>    
      <div className='flex flex-wrap justify-center'>
          
          {employees.map( (employee)=> {
            const editEmployee =  <Editemployee id={employee.id} name={employee.name} role={employee.role} updateEmployee={updateEmployee}/>
            return(
              <Employee 
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              img={employee.img}
              editEmployee= {editEmployee}
              />
            );
            
          })}
      </div>
      <Addemployee newEmployee={newEmployee}/>
       
      </>
         
       
       : <h2>Hello</h2>}
       
    </div>
  );
}

export default Employees;
