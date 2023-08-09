import React from 'react'

import saf from '../../data/saf3.png'
import boat from '../../data/boat.jpeg'
import './login.css'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
      <div className='full-saf'>
      <div>
        <figure className='--image-1'>
            <img src={saf} alt="safaricom" />
        </figure>
      </div>
      {/* sec-image */}
      
      {/* welcome */}
      <div className='welcoming-1'>
      <p>Fill the form below to register</p>
      </div>
      {/* form */}
      <form>
        <Box  className="input-1">
            <input className='input is-primary' type='text' placeholder='Full Name' />
            <input className='input is-primary' type='text' placeholder='Id Number' />
             <input className='input is-primary' type='text' placeholder='Phone Number' />
             <input className='input is-primary' type='password' placeholder='Password' />
             <input className='input is-primary' type='password' placeholder='Confirm Password' />
           
           <p></p>
             
        </Box>
        <Box className="saf-btn">
          <button className='saf-btn2'>
            Register to Fuliza M-pesa
          </button>
          
        </Box>
      <div className='not-reg'>
        <p>Already have an Account? &#160; <span>
          
          <Link to='/' style={{color:' #09ee09'}}>Login</Link>
          
          </span> </p>
      </div>

      <div className='reg-terms'>
      <Link to='https://www.safaricom.co.ke/media-center-landing/terms-and-conditions/m-pesa-customer-terms-conditions#:~:text=All%20fees%20are%20deducted%20at,notified%20to%20you%20by%20SMS.'>  <p>Terms</p></Link>
      <Link to='https://www.safaricom.co.ke/media-center-landing/terms-and-conditions'>  <p>policy</p></Link>
       
      </div>
      </form>
      <div>
        
      </div>
    </div>
  )
}

export default Register
