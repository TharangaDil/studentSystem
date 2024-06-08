import './CSS/main.css';
import React from 'react';
import logo from './img/logo.png';




export default function Mainpage(){
  


    return(
        <>
      
        <div className='main'>
            <center><img src={logo} className='logo'></img></center>
           <div className='userl'>SCHOOL STUDENTS MANAGEMENT SYSTEM</div><br/><br/>

           <button className='btnadd' >Add Student</button>
           <button className='btnlist' >Students List</button>
          
            
            
        </div>
        </>
    )
}