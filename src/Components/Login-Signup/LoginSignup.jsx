import React, {useState} from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/user.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/padlock.png';

const LoginSignup = () => {

  const[action, setAction] = useState("Login")

  return (
    <div className='Container'>
      <div className="heading">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
        <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="" height="15px" width="15px"/>
            <input type="text" placeholder='Name' />
          </div>} 
          <div className="input">
            <img src={email_icon} alt="" height="15px" width="15px" />
            <input type="email" placeholder='Email-id' />
          </div>
          <div className="input">
            <img src={password_icon} alt="" height="15px" width="15px" />
            <input type="password" placeholder='Password'  />
          </div>
        </div>
        {action==="Sign-Up"?<div></div>:<div className="forgot-password">Forgotten Password ?</div>}
        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"} onClick={()=> {setAction("Sign-Up")}}>Sign-Up</div>
          <div className={action==="Sign-Up"?"submit gray":"submit"} onClick={()=> {setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup;