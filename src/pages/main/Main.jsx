import { Avatar, Box, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './main.css'
import {  BsDatabaseCheck} from 'react-icons/bs'
import { AiOutlineRise} from 'react-icons/ai'
import {FaSortAmountUpAlt} from 'react-icons/fa'
import {GiProgression} from 'react-icons/gi'
import {MdOutlineLogout} from 'react-icons/md'
import {BiHomeSmile} from 'react-icons/bi'
import {BiHistory} from 'react-icons/bi'
import global from '../../data/globalPay.jpg'
import hustler from '../../data/fund.webp'
import mshwari from '../../data/mshwari.jpg'
import KCB from '../../data/kcb.png'
import flight from '../../data/flight.png'
import taxi from '../../data/taxi.jpg'
import train from '../../data/train.png'
import iabiri from '../../data/iabri.png'
import kenya from '../../data/kenya.jpg'
import mpost from '../../data/mpost.png'
import nhif from '../../data/nhif.jpg'
import nssf from '../../data/nssf.jpg'
import Helb from '../../data/helb.png'
import kodris from '../../data/kodris.png'
import bidhaa from '../../data/bidhaa.jpg'
import tsc from '../../data/tsc.jpg'
import netflix from '../../data/netflix.png'
import music from '../../data/music.png'
import wwe from '../../data/wwe.png'
import sp from '../../data/superSport.jpg'
import Menu from '../menuTab/Menu'
import Message from '../messages/Message'
import  Brightness4Icon  from '@mui/icons-material/Brightness4'
import { Link } from 'react-router-dom'

const Main = () => {
   const [theme,setTheme]=useState('light');
    const toggleTheme=()=>{
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light')
        }
    }
    useEffect(()=>{
        document.body.className=theme;
    }, [theme]);

  
    // on scroll
    window.onscroll=()=>{
      let header=document.querySelector('header');

      header.classList.toggle('sticky',window.scrollY > 100);
    }

  

  return (
    <div>
     
    <div className='full-saf' >
      <Box  className={`App ${theme}`}>
      <header className=' header  '>
        <Link to='/profile' style={{textDecoration:"none"}}>
        <h1>
          <Avatar sx={{color:'#fff',background:'#dd8787',cursor:'pointer'}} >BB</Avatar>
        </h1>
        </Link>
        <p className='hello'>
        Good Evening,
      
        <h2>Brian👋</h2>
        </p>

        <div className='icons-1-1'>
          <div className='msg-1'>
            <IconButton>
               <Message/>
            </IconButton>
           
          </div>
         
          <div className='btn-dark' style={{cursor:'pointer',marginLeft:'2rem',marginRight:'2rem'}} onClick={toggleTheme}>
               <IconButton>
                 <Brightness4Icon style={{fontSize:'30px'}} />
                </IconButton> 
        </div>
           <p>
           <Menu/>
           
          </p>
        </div>
      </header>
      {/* amount section */}
      <Box className="amount amount-2">
        <Box className=" box-1">
          <h2>Balance</h2>
          <p>Ksh. 9572.00</p>
          <h4>Amount Deposited</h4>
        </Box>
      </Box>
      {/* under icons */}
      <Box className="icons-1">
        <Box className="icon-2">
         <p className='start-1 '>
          <h1 className='green-1 '><AiOutlineRise size={26} /></h1>
        <h5>  Increment</h5> 
          </p> 
          <p className='start-1'>
          <h1 className='blue-1'><FaSortAmountUpAlt size={26} /></h1>
        <h5>Order Higher</h5> 
          </p> 
           <p className='start-1'>
          <h1 className='purple-1'><BsDatabaseCheck size={26} /></h1>
        <h5>Check Limits </h5> 
          </p> 
           <p className='start-1'>
          <h1 className='blue-11'><BiHistory size={26} /></h1>
        <h5>Fuliza History </h5> 
          </p> 
                    
        </Box>
      </Box>

       {/* floating */}
           <Box className="amount">
            <Box className=" box-2">
              <p>
              <h2>Financial Services</h2>
              <h3>view all</h3>
              </p>
              {/* image */}
              <div className='full-fn'>
                 <figure className='image is-32x32 finance'>
                <img src={global} alt="GlobalPay" />
                <p>GlobalPay</p>
              </figure>

               <figure className='image is-32x32 finance'>
                <img src={hustler} alt="hustler" />
                <p>Hustler Fund</p>
              </figure>

               <figure className='image is-32x32 finance'>
                <img src={mshwari} alt="m-shwari"  />
                <p>M-Shwari</p>
              </figure>

               <figure className='image is-32x32 finance'>
                <img src={KCB} alt="KCB" />
                <p>KCB M-PESA</p>
              </figure>
              </div>
             
             
            </Box>
           </Box>

             {/* floating  2*/}
           <Box className="amount">
            <Box className=" box-2">
              <p>
              <h2>Transport & Travel</h2>
              <h3>view all</h3>
              </p>

              {/* image */}
               <div className='full-fn'>
                 <figure className='image is-32x32 finance'>
                <img src={flight} alt="flight booking" />
                <p>Book A Flight</p>
              </figure>

               <figure className='image is-32x32 finance'>
                <img src={taxi} alt="taxi" />
                <p>Book A Taxi</p>
              </figure>

               <figure className='image is-32x32 finance'>
                <img src={train} alt="train"  />
                <p>Train Tickets</p>
              </figure>

               <figure className='image is-32x32 finance'>
                <img src={iabiri} alt="iabiri" />
                <p>IABIRI APP</p>
              </figure>
              </div>
             
            </Box>
           </Box>

             {/* floating */}
           <Box className="amount">
            <Box className=" box-2">
              <p>
              <h2>Local Services</h2>
              <h3>view all</h3>
              </p>
             
             {/* icons */}
               <div className='full-fn'>
                 <figure className='image is-32x32 finance'>
                <img src={kenya} alt="mycountry" />
                <p>MyCountry</p>
              </figure>

               <figure className='image is-32x32 finance'>
                <img src={mpost} alt="m-post" />
                <p>M-post </p>
              </figure>

               <figure className='image is-32x32 finance'>
                <img src={nhif} alt="NHIF"  />
                <p>MyNHIF</p>
              </figure>

               <figure className='image is-32x32 finance'>
                <img src={nssf} alt="nssf" />
                <p>NSSF Mobile</p>
              </figure>
              </div>
            </Box>
           </Box>

             {/* floating */}
           <Box className="amount">
            <Box className=" box-2">
              <p>
              <h2>Education</h2>
              <h3>view all</h3>
              </p>

              {/* icons education */}
                <div className='full-fn'>
                 <figure className='image is-32x32 finance'>
                <img src={Helb} alt="HELB" />
                <p>HELB</p>
              </figure>

               <figure className='image is-32x32 finance'>
                <img src={kodris} alt="kodris" />
                <p>Kodris Africa</p>
              </figure>

               <figure className='image is-32x32 finance'>
                <img src={bidhaa} alt="bidhaa"  />
                <p>MyBidhaa</p>
              </figure>

               <figure className='image is-32x32 finance'>
                <img src={tsc} alt="tsc" />
                <p>TSC App</p>
              </figure>
              </div>
             
            </Box>
           </Box>

             {/* floating */}
           <Box className="amount">
            <Box className=" box-2">
              <p>
              <h2>News & Entertainment</h2>
              <h3>view all</h3>
              </p>
             {/* image icons */}
               <div className='full-fn'>
                 <figure className='image is-32x32 finance'>
                <img src={netflix} alt="netflix" />
                <p>NETFLIX</p>
              </figure>

               <figure className='image is-32x32 finance'>
                <img src={music} alt="music" />
                <p>Musics</p>
              </figure>

               <figure className='image is-32x32 finance'>
                <img src={sp} alt="SuperSport"  />
                <p>FootBall</p>
              </figure>

               <figure className='image is-32x32 finance'>
                <img src={wwe} alt="wwe" />
                <p>WWE</p>
              </figure>
              </div>
             
            </Box>
           </Box>

        {/* footer */}
        <div className='footers box'>
          <p>
           <p style={{color:'#1acc1a'}}>
           <h3 className='botom-1'><BiHomeSmile size={25} /></h3> 
           <p > Home</p>
          </p>
         </p>
  
           <p>
            <p>
             <Link to="/transact" style={{textDecoration:'none',color:'black'}} >
           <h3 className='botom-1'><MdOutlineLogout size={25} /></h3> 
           Transact
         </Link>
          </p>
         </p>

           <p>
           <p>
           <h3 className='botom-1'><GiProgression size={25} /></h3> 
           <p>Grow</p>
          </p>
         </p>

           <p>
           <p>
             <Link to="/" style={{textDecoration:'none',color:'black'}} >
           <h3 className='botom-1'><MdOutlineLogout size={25} /></h3> 
           Exit
         </Link>
          </p>
          
         </p>
        </div>
          </Box>
           
    </div>
    

    </div>
  )
}

export default Main
