import React from 'react'
import './LoginScreen.css'
import { useState } from 'react'
import SignUpScreen from './SignUpScreen'

const LoginScreen = () => {
  const [signIn , setSignIn] = useState(false)
  return (
    <div className='loginscreen'>
      <div className='loginscreen__background'>
        <img
        className='LoginScreen__logo'
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
        alt=''
        />
        <button
        onClick={() => setSignIn(true)}
         className='Login_button'>
          Sign In
        </button>
        <div className='LoginScreen__gradient'></div>
        <div className='loginscreen__body'>
               {signIn ? (
                <SignUpScreen/>
               ) :(
                <>
                <h1>Unlimited flims, programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time </h2>
                <h3>
                  Ready to watch ? Enter Your email to create or restart your membership.
                </h3>
    
                <div className='loginscreen__input'>
                  <form>
                    <input type="email" placeholder="Email Adress"/>
                    <button
                    onClick={() => setSignIn(true)}
                     className='loginscreen__getstarted'>
                      GET STARTED</button>
                  </form>
                </div>
                </>
               )}
           
        </div>
      </div>
    </div>
  )
}

export default LoginScreen