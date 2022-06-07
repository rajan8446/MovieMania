import React, {useRef, useState} from 'react';
import '../css/login.css'
import { auth } from '../Firebase/firebase';
import HomeScreen from './HomeScreen';

const LogInScreen = () => {
  const[toggle, setToggle] = useState(false) 

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const createAccount=(e)=>{
    setToggle(true)
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then(authUser =>{
      console.log(authUser)
    })
    .catch(error => {
      alert(error.message)
    })
  }

  const signIn =(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then(authUser =>{
      console.log(authUser)
    })
    .catch(error => {
      alert(error.message)
    })
  }
  return (
    <>
    {
      toggle ? <HomeScreen /> :
      <div className='signup_screen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type='email' placeholder='Email'/>
            <input ref={passwordRef} type='password' placeholder='Password'/>
            <button onClick={signIn}>Sign In</button>
            <h4>New to RkMania <span onClick={createAccount}>Sign UP Now!!</span></h4>

        </form>
    </div>
    }
    
    </>
  )
}

export default LogInScreen;