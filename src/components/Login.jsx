import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
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
      <form
        className="absolute w-3/12  py-20 px-12 my-44 mx-auto right-0 left-0 text-white bg-black  opacity-80 rounded-lg"
        action="submit"
      >
        <h1 className="text-3xl">{isSignedIn ? "Sign In" : "Sign Up"}</h1>
        { !isSignedIn && 
          <input
            type="text"
            className="p-2 my-2 w-full "
            placeholder="Full Name"
          />
        }
        <input
          type="text"
          className="p-2 my-2 w-full "
          placeholder="Email Address"
        />
        <input type="text" className="p-2 my-2 w-full" placeholder="Password" />
        <button className="w-full p-2 my-2 bg-red-800 ">Sign In</button>
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
