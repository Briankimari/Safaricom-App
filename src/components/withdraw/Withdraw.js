import React, { Component } from "react";
import './index.css'
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft} from 'react-icons/ai';
import { IconButton } from "@mui/material";


class Withdraw extends Component {
    // drop down
     
    handleChange(event){
        const {name,value} =event.target;
        this.setState({[name]: value});
    }

   constructor(...args){ 
    super(...args);
    
    this.state={
        amount:"8300"
    }

    this.state={
            dropdown:""
        };
        this.handleChange=this.handleChange.bind(this);

    this.state= {counter: 9750};
    this.increment1=this.increment1.bind(this);
    this.decrement1=this.decrement1.bind(this);
     this.increment2=this.increment2.bind(this);
    this.decrement2=this.decrement2.bind(this);
   }



  
    
    increment1(){
        this.setState(state=> ({counter: state.counter-50}));

    }
    increment2(){
        this.setState(state=> ({counter: state.counter-100}));
        
    }
     decrement1(){
        this.setState(state=> ({counter: state.counter-250}));

    }
    decrement2(){
        this.setState(state=> ({counter: state.counter-500}));
        
    };
    
    render () {
                                                                                                                                   
       
        return (
            <div className="main-container">
                <div className="inner-container">
                    <div className="heading-container">
                          <IconButton sx={{
                            display:'flex',
                            marginRight:'auto'
                          }}>
                        <Link to='/safaricom' style={{textDecoration:'none',color:'white'}}>
                        <AiOutlineArrowLeft size={28}/>
                        </Link>
                        </IconButton>
                        <div className="para-div">

                            <p className="s">BB</p>

                        </div>
                        <p className="name-para">Brian Bandi</p>
                    </div>

                    <div className="money-container">
                        <p  className="balance-name">Account Balance</p>
                        <div className="balance-holder">
                            <p className="amount-13"> {this.state.counter}</p>
                        </div>
                    </div>
                    <p className="kshs">In Kshs</p>
                    <p className="deposit">Withdraw Money $</p>
                    <p className="choose">CHOOSE SUM (IN KSHS)</p>

                    <ul className="items-holder ">
                 <button type="button" onClick={this.increment1} className="button is-primary">50</button>
                 <button type="button" onClick={this.increment2} className="button is-primary">100</button>
                
                    </ul>
                    <ul className="items-holder">
                         <button type="button" onClick={this.decrement1} className="button is-primary">250</button>
                 <button type="button" onClick={this.decrement2} className="button is-primary">500</button>
                    </ul>
                     <div className="with-btn" >
                    <button>
                        Withdraw
                    </button>
                   </div>
                   </div>
                  
              

            </div>
        )
    }
}
export default Withdraw