import React from "react";
import { setsignout } from "../features/user/userSlice";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ email, photo, name }) => {
  const dispatch = useDispatch();
  const nav = useNavigate()

  const handlesignout = () => {
    const athu = getAuth();
    athu.signOut().then(() => {
      dispatch(setsignout());
      nav('/UserLogin')
    });
  };

  return (
    <div className="userProfile">
      <div className="userinfo">
        <div>
          <img src={photo} alt="" />
          <h2>{email}</h2>
          <p>{name}</p>
          <h3>Subscribe to enjoy Disney+</h3>
          <button onClick={handlesignout} className="userbutton">SignOut</button>
        </div>
        <div>
          <button className="userbutton">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
