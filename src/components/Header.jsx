import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { showGptSearch } from "../utils/gptSlice";

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

  const handleToggleSearch = ()=>{
    dispatch(showGptSearch())
  }
  return (
    <div className=" flex justify-between absolute w-screen bg-gradient-to-b from-black z-50">
      <img className="w-44"
        src={LOGO}
        alt="logo"
      />
      <div>
      <button className="m-5 p-3 rounded-sm text-white font-bold bg-red-800" onClick={handleToggleSearch}>GptSearch</button>
        <button className="mr-5 p-3 rounded-sm text-white font-bold  bg-red-800" onClick={handleSignout}>Signout</button>
      </div>
    </div>
  );
};

export default Header;
