import './CSS/main.css';
import React from 'react';
import logo from './img/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Home(){
    const navigate = useNavigate();

    const goToMain = () => {
        navigate('/main'); 
    };
  
   const[name,setName]=useState('');
   const[grade,setGrade]=useState('');
   const[address,setAddress]=useState('');
   const[dob,setDob]=useState('');
   const[tel,setTel]=useState('');
 

   const handleClick = (e)=>{
    e.preventDefault()
    const student = {name,address,grade,dob,tel}
    console.log(student)
    fetch("http://localhost:8080/student/add",
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
      }).then(()=>{
        console.log("New Student Added")
      })
    }

    return(
        <>
      
        <div className='main'>
            <img src={logo}></img>
           <div className='userl'>ADD A NEW STUDENT</div><br/><br/>
          
           <label className='lable1'>Student Name:</label>
           <input type='text'className='inputdata' value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
           <label className='lable2'>Grade:</label>
           <input type='text'className='inputdata'value={grade} onChange={(e)=>setGrade(e.target.value)}/><br/><br/>
           <label className='lable3'>Date of birth:</label>
           <input type='date'className='inputdata'value={dob} onChange={(e)=>setDob(e.target.value)}/><br/><br/>
           <label className='lable4'>Address:</label>
           <input type='text'className='inputdata'value={address} onChange={(e)=>setAddress(e.target.value)}/><br/><br/>
           <label className='lable5'>Contact Number:</label>
           <input type='text'className='inputdata'value={tel} onChange={(e)=>setTel(e.target.value)}/><br/><br/>
          
           <button className='btnsubmit' onClick={handleClick}>Submit</button><br/><br/>
          
            
            
        </div>
        </>
    )
}