import React, { useState } from 'react'
import './Signin.css'
import logo from './Signin.jpg';
// import user_icon from './Images/person.png'
// import email_icon from './Images/email.png'
// import password_icon from './Images/password.png'
export const Signin = () => {
  const [Action,SetAction]=useState('Sign in')
  return (
    // <div>login_signup</div>
    <div className="container">

      <div className="form">
        <header className='UpEvent'>
          Up<span className='Event'>Event</span> <br />
        </header>
        <header className='line'>{Action} to UpEvent</header>

        <div className="inputs">

          <label htmlFor="">YOUR EMAIL :</label><br />
          <input type="email" name='email' placeholder='Enter your email' /><br />

          <label htmlFor="">YOUR PASSWORD :</label><br />
          <input type="password" name='Password' placeholder='Enter your password' /><br />
        </div>
        <div className="forgot">Forgot Password?
          <a href="Click here!"><span> Click here !</span></a></div>
        <div className="btn" >
          <button id='login' className={Action==='sign in'?"submit grey":"submit"} onClick={()=>SetAction('Sign here')}><span>
          {Action}
          </span>
          </button>

          <span className='Or'>Or</span>
          <button id='signup'>
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="" /> 
            <span>
            Sign up with Google
            </span>
          </button>
        </div>
      </div>
      <div className="img" >
        <img src={logo} alt="Img not Loded" id="img" />
      </div>
    </div>
  )
}
export default Signin
