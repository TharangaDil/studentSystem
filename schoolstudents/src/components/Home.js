import './CSS/main.css';
import React from 'react';
import logo from './img/logo.png';



export default function Home(){
   

    return(
        <>
      
        <div className='main'>
            <img src={logo}></img>
           <div className='userl'>SCHOOL STUDENTS MANAGEMENT SYSTEM</div><br/><br/>
          
           <label className='lable1'>Student Name:</label>
           <input type='text'className='inputdata'/><br/><br/>
           <label className='lable2'>Grade:</label>
           <input type='text'className='inputdata'/><br/><br/>
           <label className='lable3'>Date of birth:</label>
           <input type='date'className='inputdata'/><br/><br/>
           <label className='lable4'>Address:</label>
           <input type='text'className='inputdata'/><br/><br/>
           <label className='lable5'>Contact Number:</label>
           <input type='text'className='inputdata'/><br/><br/>
          
           <button className='btnsubmit'>Submit</button><br/><br/>
          
            
            
        </div>
        </>
    )
}