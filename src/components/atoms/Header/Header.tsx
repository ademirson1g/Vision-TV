import React from "react";
import "../../style/Header.css";

import { Link } from "react-router-dom";

import Logo from "../../../assets/images/logo.gif"

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">  
          <img className="header__icon" src={Logo} />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
