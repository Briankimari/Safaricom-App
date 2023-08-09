import React, { useState } from 'react'
import { Box, CssBaseline, Drawer, IconButton, ListItem, ListItemButton, ListItemText } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'

const menubar=[
    {
        id:1,
        name:'Edit Profile',
        path:'/profile'
    },
    {
        id:2,
        name:'Deposit',
        path:'/deposit'
    },
    {
        id:3,
        name:'Settings',
        path:'/settings'
    },
    {
        id:4,
        name:'Report Issues',
        path:'/report'
    }
];

export default function Menu() {
    const navigate= useNavigate();
    const [open,setOpen]=useState()
    
const sideBar=()=>(
    <div style={{width:240}} onClick={()=>setOpen(false)} >
        {menubar.map((text)=> (
            <ListItem key={text.id} onClick={()=> navigate(text.path)} >
                <ListItemButton>
                    <ListItemText primary={text.name} />
                </ListItemButton>
            </ListItem>
        ))}
    </div>
)
  return (
    <div>
        <CssBaseline/>
        <div>
            <IconButton sx={{marginTop:''}} aria-label='Menu' color='inherit' edge="start" onClick={()=>setOpen(true)}> 
                <AiOutlineMenu size={20} />
            </IconButton>
        </div>
        {/* drawer */}
        <Box>
            <Drawer PaperProps={{
                sx:{
                    marginTop:10,
                    height:'30vh'
                }
            }} 
             open={open} 
            onClose={()=>setOpen(false)} 
            anchor='right'>
                {sideBar()}

            </Drawer>
        </Box>
      
    </div>
  )
}




