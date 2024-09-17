import React, { act } from 'react'
import './LoginSignUp.css'
//import email_icon from '../Assets/email.png'
import { MdEmail } from 'react-icons/md';   // Mail icon
import { FaUser } from 'react-icons/fa';    // User icon for text input
import { RiLockPasswordLine } from 'react-icons/ri'; // Password icon
import { useState } from 'react';


export const LoginSignUp = () => {
    const [action, setAction] = useState('Sign Up');

  return (
    <div className="container">
        <div className='header'>
            <div className='text'> {action}</div>
            <div className='underline'></div>
        </div>

       <div className='inputs'>
        {action==="Login"?<div></div> : 
        <div className='input'>
        <FaUser size={20} style={{ marginRight: '8px' }} />  
        <input type='text' placeholder='Enter your name' />
      </div>}
       

      <div className='input'>
        <MdEmail size={20} style={{ marginRight: '8px' }} /> 
        <input type='email' placeholder='Enter your email' />
      </div>

      <div className='input'>
        <RiLockPasswordLine size={20} style={{ marginRight: '8px' }} /> 
        <input type='password' placeholder='Enter your password' />
      </div>
        </div>
        {action === 'Sign Up'? <div></div>:
        <div className="forgot-password">
            Lost Password? <span> click here</span>
        </div>}
        
        <div className='submit-container'>
            <div className={action === "Login"? "submit gray":"submit"} onClick={()=>setAction('Sign Up')}> Sign UP</div>
            <div className={action === "Sign Up"? "submit gray":"submit"} onClick={()=>setAction('Login')}> Login</div>
        </div>
    </div>
  )
}

export default LoginSignUp