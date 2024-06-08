import './CSS/main.css';
import React, { useState } from 'react';
import logo from './img/logo.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




export default function Studentlist(){
    const navigate = useNavigate();
    const gotoAdd = () => {
     navigate('/home');
    } 
 
    const gotoHome = () =>{
     navigate('/');
    }
    
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
        
            <button className='btnadd' onClick={gotoAdd} >Add Student</button>
            <button className='btnlist' onClick={gotoHome} >Back To Home</button>

          
            
            
        </div>
        </>
    )
}