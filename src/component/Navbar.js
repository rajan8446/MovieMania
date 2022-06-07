import React, { useEffect, useState } from 'react';
import logo3 from '../image/logo3.png';
import profile from '../image/profile.png';
import { auth } from '../Firebase/firebase';
import '../css/navbar.css'


const Navbar = () => {
    const [show, setShow] = useState(false);

    const NavTransition = () =>{
        if(window.scrollY > 100){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', NavTransition);
        return ()=>{
            window.removeEventListener('scroll', NavTransition);
        }
    })
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className='nav_container'>
            <img src={logo3} className='logo'/>
            <img src={profile} onClick={()=>auth.signOut()} className='profile'/>
        </div>
    </div>
  )
}

export default Navbar