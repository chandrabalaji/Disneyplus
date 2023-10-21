import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footers">
      <div className="footer-one">
        <div>
          <h3>Company</h3>
          <p>About us</p>
          <p>careers</p>
        </div>
        <div>
          <h3>view website in</h3>
          <p>english</p>
        </div>
        <div>
          <h3>need help ?</h3>
          <p>visit help center</p>
          <p>share feedback</p>
        </div>
        <div>
          <h3>connect with us</h3>
          <span className="icon">
            <FiFacebook />
          </span>
          <span  className="icon">
            <FiTwitter />
          </span>
        </div>
      </div>
      <div className="footer-two">
        <div>
        &copy; {new Date().getFullYear()} <p>all rights reserved.</p>
        <p>terms of use privacy policy FAQ</p>
        </div>
        <img src="./images/googleplaystore.png"  alt="" />
      </div>
    </footer>
  );
};

export default Footer;
