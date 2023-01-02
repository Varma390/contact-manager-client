import React from 'react';
 import Ellipse1 from '../images/Ellipse31.png';
 import Ellipse2 from '../images/Ellipse32.png';
import Dots from '../images/Dots.png';
import "../styles/Signup.css"
import { useState } from 'react';
const Signup = ()=>{
 
   const[password,setpassword]=useState('');
   const[confirmpassword,setconfirmpassword]=useState('');

   if(password!==confirmpassword){
      console.log("password incorrect");
   }
   
  return (
      <div className="Container">
          <img src={Ellipse1} className="Ellipse31"alt="" />
          <img src={Ellipse2} className="Ellipse32" alt="" />
          <div className="rectangle">
            <div className="details">
              
              <h1>Logo</h1>
               <h3>Create New Account</h3>
               <input type="text" placeholder="User ID"/><br></br>
               <br></br>
               <input type="text" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/><br></br>
               <br></br>
               <input type="text" placeholder="confirm password" value={confirmpassword} onChange={(e) =>{setconfirmpassword(e.target.value)}}/><br></br>
              
              <button className="button1">Sign up</button>
              <div className="Dots">
              <img src={Dots} alt="" />
              </div>
              <div className="Dots1">
              <img src={Dots} alt="" />
              </div>
            </div>

          </div>
     </div>
    );
}
export default Signup;