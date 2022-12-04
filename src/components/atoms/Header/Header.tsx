import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Logo from "../../../assets/images/logo.gif"
import Search from '../Search/Search'

import "../../style/Header.css";

const Header:React.FunctionComponent = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">  
          <img className="header__icon" src={Logo} />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular Movies</span>
        </Link>
        <Link to="/tvs/top_rated" style={{ textDecoration: "none" }}>
          <span>Popular Tv Shows</span>
        </Link>
      </div>
      <Search />
    </div>
  );
};

export default Header;
