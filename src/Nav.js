import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transtionNavBar = () => {
    if(window.scrollY > 100){
       handleShow(true)
    }else{
      handleShow(false);
    } 
};  

useEffect(() => {
window.addEventListener("scroll", transtionNavBar);
return () => window.removeEventListener("scroll", transtionNavBar);
}, []);

  return (
    <div className={`nav ${show &&'nav__black'}`}>
      <div className='nav__content'>
      <img className='nav__logo'
         src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='' />

        <img className='nav__avater'
         src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png' alt=''/>
        </div>
      </div>
        
  )
}

export default Nav