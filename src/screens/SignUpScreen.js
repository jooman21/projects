import { useRef } from 'react'
import "./SignUpScreen.css"
import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check for the user

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  }
  
    
  return (
    <div className='SignUpScreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef}  placeholder='Email' type="email"/>
            <input ref={passwordRef} placeholder='Password' type="password"/>
            <button type='Submit' >SignIn</button>

            <h4>
                <span className='SignupScreen__gray'>New to Netflix? </span>
                <button  type="button"
                onClick={onGoogleClick}
                className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded ">
                <FcGoogle className="text-2xl  bg-white rounded-full mr-2" />
                 Continue with Google
                <span>Sign Up now.</span> 
                </button> 
            </h4>
        </form>
    </div>
  )
}

export default SignUpScreen