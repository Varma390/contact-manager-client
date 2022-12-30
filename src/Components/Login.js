import React from 'react';
 import Ellipse1 from '../images/Ellipse31.png';
 import Ellipse2 from '../images/Ellipse32.png';
import Dots from '../images/Dots.png';
import {Link} from "react-router-dom";


const Login = ()=>{
return(
         <div className="Container">
                  <img src={Ellipse1} className="Ellipse31" alt="ellipse"/>
                   <img src={Ellipse2} className="Ellipse32" alt="ellipse1"/> 
                  <div className="rectangle">
                           <div className="details">
                                  <h1>Logo</h1>
                                  <h4>Enter your credentials to access your account</h4>
                                  <input type="text" defaultValue="User ID"/><br></br>
                                  <br></br>
                                  <input type="text" defaultValue="Password"/><br></br>
                                  <br></br>
                                  <button className="button1">Sign In</button>
                                  <Link to="/Signup"><button className="button2">Sign Up</button></Link>
                             <div className="Dots">
                                  <img src={Dots} alt=""/>
                               </div>
                          <div className="Dots1">
                             <img src={Dots} alt=""/>
                     </div>
                </div>
          </div>
     </div>
)
}
export default Login;