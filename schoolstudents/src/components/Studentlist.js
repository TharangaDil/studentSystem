import './CSS/main.css';
import React, { useState } from 'react';
import logo from './img/logo.png';
import { useEffect } from 'react';




export default function Studentlist(){
    const[students,setStudents]=useState('');
    useEffect(()=>{
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setStudents(result);
        })
      },{})


    return(
        <>
      
        <div className='main'>
            <center><img src={logo} className='logo'></img></center>
           <div className='userl'>STUDENTS LIST</div><br/><br/>

           {students.map(student=>(
            <table>
                <tr>
                    <th>Name</th>
                    <th>Grade</th>
                </tr>
                <tr>
                    <td>{student.name}</td>
                    <td>{student.grade}</td>
                </tr>
            </table>
     
        
     ))}

          
            
            
        </div>
        </>
    )
}