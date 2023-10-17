import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import "../firebase";
import { auth, provider } from "../firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  username,
  useremail,
  userphoto,
  setsignout,
  setuserLogin,
} from "../features/user/userSlice";
import UserProfile from "./UserProfile";

const UserLogin = () => {
  const dispatch = useDispatch();
  const name = useSelector(username);
  const email = useSelector(useremail);
  const photo = useSelector(userphoto);


 

  const handlesignin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((res) => {
        const credetial = GoogleAuthProvider.credentialFromResult(res);
        const token = credetial.accessToken;
        setuser(res.user);
        // console.log(res.user);
      })
      .catch((err) => {
        const error = err.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const setuser = (user) => {
    dispatch(
      setuserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <div className="UserLogin">
      {!name ? (
        <>
          <h1>login to Disney+ </h1>
          <Link id="link" onClick={handlesignin}>
            Login
          </Link>
        </>
      ) : (
        <UserProfile email={email} name={name} photo={photo}  />
      )}
    </div>
  );
};

export default UserLogin;
