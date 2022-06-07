import React, { useState } from 'react';
import logo3 from '../image/logo3.png';
import '../css/signUp.css'
import LogInScreen from './LogInScreen';

const SignUpScreen = () => {
  const [signIn, setSignIn] = useState(false)
  const [signScreen, setSignScreen] = useState(false)
  return (
    <div className='login'>
      <div className='login_header'>
        <img src={logo3} className='login_logo' />
        <button className='login_button' onClick={()=>setSignScreen(true)}>
          Sign In
        </button>
      </div>
      <div className='login_body'>
        {
          signIn || signScreen ? <LogInScreen /> :

            <>
              <h1>Unlimited Films, TV programmes and more...</h1>
              <h2>Watch Anywhere, Cancel at any time</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <form className='login_form'>
                <input type='text' placeholder='Email Address' />
                <button onClick={() => setSignIn(true)}>Get Started</button>
              </form>
            </>
        }

      </div>
      <div className='login_shadow'></div>
    </div>
  )
}

export default SignUpScreen