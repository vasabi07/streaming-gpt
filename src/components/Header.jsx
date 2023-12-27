import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignout = ()=>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      console.log(error);
    });
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid,email,displayName}))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
  },[])
  return (
    <div className=" flex justify-between absolute w-screen bg-gradient-to-b from-black z-50">
      <img className="w-44"
        src={LOGO}
        alt="logo"
      />
      <div>
        <button className="m-5 text-white font-bold" onClick={handleSignout}>Signout</button>
      </div>
    </div>
  );
};

export default Header;
