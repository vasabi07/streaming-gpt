import React, { useRef, useState } from "react";
import Header from "./Header";
import LoginValidation from "../utils/LoginValidation";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase'


const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [iserrorMessage,setIsErrorMessage] = useState(null)
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
 
  
  const HandleSubmit = (e) => {
    const message = LoginValidation(email.current.value,password.current.value);
    setIsErrorMessage(message)
    if(message) return;

    if(!isSignedIn){
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // navigate('/browse')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setIsErrorMessage(errorCode+" "+ errorMessage)
    });
    }else{
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // navigate('/browse')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setIsErrorMessage(errorCode+" "+ errorMessage)
    });
    }
  };
  
  const HandleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12  py-20 px-12 my-44 mx-auto right-0 left-0 text-white bg-black  opacity-80 rounded-lg"
      >
        <h1 className="text-3xl">{isSignedIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignedIn && (
          <input
          ref={name}
            type="text"
            className="p-2 my-2 w-full text-black "
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          type="text"
          className="p-2 my-2 w-full text-black "
          placeholder="Email Address"
        />
        <input
          ref={password}
          type="password"
          className="p-2 my-2 w-full text-black"
          placeholder="Password"
        />
        <p className="text-red-800 ">{iserrorMessage}</p>
        <button className="w-full p-2 my-2 bg-red-800 " onClick={HandleSubmit}>
        {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={HandleSignIn}>
          {isSignedIn
            ? "New to Netflix? Sign up now"
            : "Already a User? Sign In here!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
