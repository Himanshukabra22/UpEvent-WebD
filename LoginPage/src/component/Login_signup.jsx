import React from 'react'
import './Login_signup_css.css'
import logo from './SignUp.jpg';
// import user_icon from './Images/person.png'
// import email_icon from './Images/email.png'
// import password_icon from './Images/password.png'
export const Login_signup = () => {
  return (
    // <div>login_signup</div>
    <div className="container">

      <div className="img" >
        <img src={logo} alt="Img not Loded" id="img" />
      </div>

      <div className="form">
        <header className='UpEvent'>
          Up<span className='Event'>Event</span> <br />
        </header>
        <header className='line'>Sign Up to UpEvent</header>

        <div className="inputs">
          <label>YOUR NAME :</label><br />
          {/* <img src={user_icon} alt="person.png" /> */}
          <input type="text" name='Name' placeholder='Enter your name' /><br />

          <label htmlFor="">YOUR EMAIL :</label><br />
          {/* <img src={email_icon} alt="email.png" /> */}
          <input type="email" name='email' placeholder='Enter your email' /><br />

          <label htmlFor="">YOUR PASSWORD :</label><br />
          {/* <img src={password_icon} alt="password.png" /> */}
          <input type="password" name='Password' placeholder='Enter your password' /><br />
        </div>
        {/* <div className="forgot">Forgot Password?
          <a href="Click here!"><span> Click here !</span></a></div> */}
        <div className="btn">
          <button id='login'>Sign Up</button>
          <span className='Or'>Or</span>
          <button id='signup'>
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="" /> 
            <span>
            Sign up with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Login_signup
