import React, { useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import "../../style/App.css";
import "../../style/Home.css";
import MovieList from "../MovieList/MoveList";

import { FaStar } from 'react-icons/fa'
import { MdOutlineDateRange } from 'react-icons/md'

export interface IJsonResposne {
  results: IMovieData[];
  page: number;
}

export interface IMovieData {
  id:string;
  poster_path: string;
  original_title: string;
  original_language: string;
  overview: string;
  release_date: number;
  vote_average: number;
  backdrop_path: string;
}

const Home: React.FunctionComponent = () => {
  const [loading, data, error, request] = useAxios<IJsonResposne>({
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated?api_key=18efa1c884796c304e2b89592f48fa10&language=en-US&page=3",
  });

  if (loading) return <p>Loading ....</p>;

  if (error !== "") return <p>{error}</p>;

  if (!data) return <p>Data was null</p>;

  return (
    <> 
      <div className="poster">
        <Carousel 
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          >
            {data.results.map(movie => (
              <Link style={{textDecoration:"none", color:"white"}} to={`/movie/${movie.id}`}>
              <div className="posterImage">
                <img src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path} alt="Image" />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">{movie.original_title}</div>
                <div className="posterImage__runtime">
                  {movie.release_date}
                  <i> <MdOutlineDateRange style={{color:"grey", paddingTop:"12px", position:"relative"}} /></i>
                  <span className="posterImage__rating">
                    {movie.vote_average}
                    <i> <FaStar style={{color:"yellow", paddingTop:"12px", position:"relative"}}/> </i>
                  </span>
                </div>
                <div className="posterImage__description">{movie.overview}</div>
              </div>
              </Link>
            ))}
          </Carousel>
          <MovieList />
      </div>
    </>
  );
};

export default Home;
