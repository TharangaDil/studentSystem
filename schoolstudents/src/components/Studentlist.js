import './CSS/main.css';
import React, { useState } from 'react';
import logo from './img/logo.png';
import { useEffect } from 'react';




export default function Studentlist(){
    const[students,setStudents]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setStudents(result);
        })
      },[])


    return(
        <>
      
        <div className='main'>
            <center><img src={logo} className='logo'></img></center>
           <div className='userl'>STUDENTS LIST</div><br/><br/>

           <center>
            <table border={1} className='tablelist'>
                <tr>
                    <th>Index No</th>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Date Of Birth</th>
                    <th>Address</th>
                    <th>Contact No</th>
                </tr>
                
                    {students.map(student=>(
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.grade}</td>
                            <td>{student.dob}</td>
                            <td>{student.address}</td>
                            <td>{student.tel}</td>
                        </tr>
                    ))}
                
            </table>
            </center>
        
    

          
            
            
        </div>
        </>
    )
}