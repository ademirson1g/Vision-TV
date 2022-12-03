import React, {useState} from "react";
import "../../style/Header.css";

import { Link } from "react-router-dom";

import Logo from "../../../assets/images/logo.gif"
import axios from "axios";
import Cards from "../Card/Card";

const Header = () => {
  const [searchKey, setSearchKey] = useState("")
  const [movies , setMovies] = useState([])
  
  const fetchMovies = async (searchKey) => {
    const {data:{results}} = await axios.get(`https://api.themoviedb.org/3/movie/343611?api_key=18efa1c884796c304e2b89592f48fa10` , {
      params: {
        query: searchKey
      }
    })
    setMovies(results)
  }
  
  // Search functionality
  const searchMovies = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchMovies(searchKey)
  }

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
        <header>
        <form onSubmit={searchMovies}>
          <input type="text" onChange={(e) => setSearchKey(e.target.value)}/>
          <button type={"submit"}>
            Search
          </button>
        </form>
      </header>
      <Cards />
      </div>
    </div>
  );
};

export default Header;
