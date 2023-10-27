import React from "react";
import "../App.css";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import "./UserLogin";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <img src="/images/logo.svg" alt="Disney+" />

      <ul className="navmenu">
        <Link to="/UserLogin">
          <CgProfile />
          <h2>profile</h2>
        </Link>

        <Link to="/search">
          <BiSearch />
          <h2>Search</h2>
        </Link>
        <Link to="/Home">
          <GoHome />
          <h2>Home</h2>
        </Link>
        <Link>
          <img src="/images/movie-icon.svg" alt="" />
          <h2>movies</h2>
        </Link>
        <Link>
          <img src="/images/series-icon.svg" alt="" />
          <h2>Series</h2>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
