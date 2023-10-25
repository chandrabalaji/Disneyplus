import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import "../firebase";
import { provider } from "../firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  username,
  useremail,
  userphoto,
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
          <div className="background"></div>
          <div className="login-set">
            <div className="content-login">
              <img src="/images/cta-logo-one.svg" alt="" />
              <h1>login to Disney+ </h1>
              <Link id="link" onClick={handlesignin}>
                Login
              </Link>
              <img src="/images/cta-logo-two.png" alt="" />
            </div>
          </div>
        </>
      ) : (
        <UserProfile email={email} name={name} photo={photo} />
      )}
    </div>
  );
};

export default UserLogin;
