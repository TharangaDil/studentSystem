import './CSS/main.css';
import React from 'react';
import logo from './img/logo.png';
import { useNavigate } from 'react-router-dom';




export default function Mainpage(){
 const navigate = useNavigate();
   const gotoAdd = () => {
    navigate('/home');
   } 
 


    return(
        <>
      
        <div className='main'>
            <center><img src={logo} className='logo'></img></center>
           <div className='userl'>SCHOOL STUDENTS MANAGEMENT SYSTEM</div><br/><br/>

           <button className='btnadd'  onClick={gotoAdd}>Add Student</button>
           <button className='btnlist' >Students List</button>
          
            
            
        </div>
        </>
    )
}