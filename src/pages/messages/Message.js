 import React, { useState } from 'react';
import { Badge, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton,  Typography,  } from '@mui/material'
import {styled  } from '@mui/material/styles'
import PropTypes from 'prop-types'
import { NotificationsOutlined} from '@mui/icons-material'

const DialogBox= styled(Dialog)(({theme})=> ({
  '&.MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding:theme.spacing(1),
  },
}))


function DialogTitleModal(props) {
  const {children, onClose, ...other} = props;

  return (
         <DialogTitle sx={{m:0,p:2}} {...other}>
      {children}
      {onClose ? (
        <IconButton aria-label='close' onClick={onClose} sx={{
          position:'absolute', right:8
, top:8, color: (theme)=> theme.palette.grey[500], }}>
        close
        </IconButton>
      ) : null}
    
    </DialogTitle>
   
  );
}
DialogTitleModal.proptoTypes={
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}


export default function Message() {
  const [open,setOpen] =useState(false);

  const handleClickOpen=()=> {
    setOpen(true)
  }
  
  const handleClose=()=> {
    setOpen(false)
  }
  return (
    <div>
         <Box>
     
     <span onClick={handleClickOpen} style={{cursor:'pointer'}}>
        <Badge badgeContent={1 } color='secondary'>
          
             <NotificationsOutlined  color='action' style={{fontSize:'30px'}}/>
          
         
        </Badge>
     </span>
   
     
      </Box>
      
      <DialogBox 
      onClose={handleClose}  open={open}>
      <DialogTitleModal id="customized-dialog-title" onClose={handleClose}>
         New Message
      </DialogTitleModal>
      <DialogContent dividers>
     <Typography gutterBottom sx={{textDecoration:'underline',color:'green'}}>
      Brian Bandi 
     </Typography>
      <Typography gutterBottom>
        You have new message!!
     </Typography>
      <Typography gutterBottom>
      New feature added!!,check out increment section to boost your M-PESA amount
     </Typography>
      </DialogContent>

      <DialogActions>
      <Button autoFocus onClick={handleClose}>
      Mark as Read.
      </Button>
      </DialogActions>
      </DialogBox>
    </div>
  );
}







