import React from 'react'
import './profile.css'
import { Box, Button, IconButton, TextField, useMediaQuery } from '@mui/material';
import { AiOutlineArrowLeft, AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Profile = () => {
const isNonMobile = useMediaQuery("(min-width:600px)");

    // on scroll
    window.onscroll=()=>{
      let header=document.querySelector('header');

      header.classList.toggle('sticky',window.scrollY > 100);
    }
  return (
    <div className='full-form'>
    <div className='body-1'>
      <header className='header'>
        <IconButton>
        <Link to='/safaricom' style={{textDecoration:'none',color:'black'}}>
          <AiOutlineArrowLeft size={18}/>
        </Link>
        </IconButton>
        <h1>My Profile</h1>
        <h3>.</h3>
      </header>
      <div className='state'>
        <p className='part-1'>
         <h2>Brian Bandi</h2>
         <div className='state-2'>
           <p>Current Balance &#160;<span>Ksh. 9572.00</span> </p>
         </div>
           {/* edit image */}
           <div>
            <Box className="user-img ">
             
                <button  className='button '>Edit Picture</button>
           
            
            </Box>
           </div>
        </p>
      </div>
      {/* edit profile */}
      <div className='my-profile'>
        <h2 style={{cursor:'pointer'}}>Edit My Profile  &#160; <AiOutlineEdit/>  </h2>
      </div>

      {/* edit form */}
      <div className='edit-form'>
 <form>
        <Box display='grid' gap='30px' gridTemplateColumns="repeat(4,minmax(0,1fr))" sx={{
          "& > div" : {gridColumn: isNonMobile ? undefined : 'span 4'}
        }}>
          <TextField
          label="First Name"
          type='text'
          name='FirstName'
          required
          sx={{gridColumn: 'span 2'}}
          />

           <TextField
          label="Last Name"
          type='text'
          name='Lastame'
          required
          sx={{gridColumn: 'span 2'}}
          />

          
           <TextField
          label="Change Password"
          type='password'
          name='password'
          required
          sx={{gridColumn: 'span 4'}}
          />

          
           <TextField
          label="Cornfirm changed Password"
          type='password'
          name='cornfirmPassword'
          required
          sx={{gridColumn: 'span 4'}}
          />

        </Box>
        
        {/* SUBMIT BTN */}
     
       <Button
       type='submit'
       fullWidth
       sx={{
        textDecoration:'underline',backgroundColor:'#a39999d0',m:'2rem 0',p:'1rem',
        color:'#fff',letterSpacing:'0.2rem',fontSize:'1.3rem',"&:hover":{background:'#1acc1a'}
       }}
       >
        Save Edited
       </Button>
    
      </form>
      </div>
     
    </div>
    </div>
  )
}

export default Profile
