import React from 'react'
import saf from '../../data/saf3.png'
import boat from '../../data/boat.jpeg'
import './login.css'
import { Box} from '@mui/material'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='full-saf '>
      <div>
        <figure className='--image-1'>
            <img src={saf} alt="safaricom" />
        </figure>
      </div>
      {/* sec-image */}
       <div>
        <figure className='boat'>
            <img src={boat} alt="safaricom" />
        </figure>
      </div>
      {/* welcome */}
      <div className='welcoming'>
        <h1>Welcome to Fuliza services</h1>
        <p>Use your login details to log in to Fuliza Mpesa Services</p>
      </div>
      {/* form */}
      <form>
        <Box  className="input-1">
             <input className='input is-primary' type='text' placeholder='Phone Number' />
             <input className='input is-primary' type='password' placeholder='Password' />
             <p>Forgot Password?</p>
             
        </Box>
         <Link to='/safaricom' style={{textDecoration:'none'}}>
        <Box className="saf-btn">
         
           <button className='saf-btn2'>
            Login to Fuliza M-pesa
          </button>
           
        </Box> 
            </Link>
      <div className='not-reg'>
        <p>Not registered yet? &#160; <span>
          
          <Link to='/register' style={{color:' #09ee09'}}>Create an Account</Link>
          
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

export default Login
