import React,{useState} from 'react'
import "./LoginPopUp.css"
import { assets } from '../../assets/assets'

export default function LoginPopUp({setShowLogin}) {
    const [currentState,setCurrentState]=useState("Sign up")
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="cross" />
        </div>
        <div className="login-popup-inputs">
            {currentState==="Sign up"? <input type="text" placeholder="Your name" required />:<></>}
           
            <input type="email" placeholder="Your email" required />
            <input type="password" placeholder="password" required />
        </div>
        <button>{currentState==="Sign up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing ,a agree to terms of use & privacy policy</p>
        </div>
        {currentState==="LogIn"?  <p>Create new account?<span onClick={()=>setCurrentState("Sign up")}>Click here</span></p>: <p>Already have an account?<span onClick={()=>setCurrentState("LogIn")}>LogIn</span></p>}
      
       
      </form>
    </div>
  )
}
