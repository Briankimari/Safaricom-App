import React, { Component } from "react";
import './index.css'
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft} from 'react-icons/ai';
import { IconButton } from "@mui/material";


class Deposit extends Component {
    // drop down
    
    handleChange(event){
        const {name,value} =event.target;
        this.setState({[name]: value});
    }

   constructor(...args){ 
    super(...args);

    this.state={
            dropdown:""
        };
        this.handleChange=this.handleChange.bind(this);

    this.state= {counter: 0};
    this.increment1=this.increment1.bind(this);
    this.decrement1=this.decrement1.bind(this);
     this.increment2=this.increment2.bind(this);
    this.decrement2=this.decrement2.bind(this);
   }

  
    
    increment1(){
        this.setState(state=> ({counter: state.counter+200}));

    }
    increment2(){
        this.setState(state=> ({counter: state.counter+400}));
        
    }
     decrement1(){
        this.setState(state=> ({counter: state.counter-50}));

    }
    decrement2(){
        this.setState(state=> ({counter: state.counter-100}));
        
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
                        <p  className="balance-name">Your Deposit Amount</p>
                        <div className="balance-holder">
                            <p className="amount-13"> {this.state.counter}</p>
                        </div>
                    </div>
                    <p className="kshs">In Kshs</p>
                    <p className="deposit">Deposit</p>
                    <p className="choose">CHOOSE SUM (IN KSHS)</p>

                    <ul className="items-holder ">
                 <button type="button" onClick={this.increment1} className="button is-primary">200</button>
                 <button type="button" onClick={this.increment2} className="button is-primary">400</button>
                
                    </ul>
                    <ul className="items-holder">
                         <button type="button" onClick={this.decrement1} className="button is-danger">-50</button>
                 <button type="button" onClick={this.decrement2} className="button is-danger">-100</button>
                    </ul>

                      {/* steps */}
                <div className="deposit-btn">
                    <h2>Deposit steps</h2>
                    <ol type="i">
                        <p className="tag">NB:minimum amount is 200,you cannot increment less than 200!! </p>
                        <li>choose the amount by clicking the buttons above.</li>
                        <li>Then click the button below to choose where to deposit amount from.</li>
                        <li>Choose the appropriate selection then deposit your amount</li>
                        <li>Wait your confirmation Message to verify your deposit.</li>
                    </ol>
                </div>
                    {/* button select */}
                   
                    <div className="full-depo">
                     <h2>Deposit from:</h2>
                    <div className="deposit-from">
                        
                         <p >
                           <button className="button is-large">
                            <select value={this.state.dropdown} onChange={this.handleChange} name="dropdown">
                               <option value='Please choose an option'>Choose</option>
                                <option value='Deposit from M-pesa'> M-PESA</option>
                                <option value='Deposit from other sources'>Others</option>
                               
                            </select>
                           </button>
                          
                         </p>
                         <div className="display-text">
                           <p> {this.state.dropdown}    </p> 
                         </div>

                         <div>
                           <button className="button is-primary is-medium" type="submit" >
                                    Deposit 
                            </button>
                          
                         </div>
                            <button className="button is-medium">{this.state.counter}</button>
                    </div>
                  
                   </div>
                  
                             
                  
                    
                </div>
              

            </div>
        )
    }
}
export default Deposit