import React , {useEffect, useState} from 'react'
import "../../style/MovieDetail.css"
import {useParams} from 'react-router-dom'
import { useAxios } from '../../hooks/useAxios';

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

const MovieDetail = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id, type} = useParams()

    const [loading, data, error, request] = useAxios<IJsonResposne>({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=18efa1c884796c304e2b89592f48fa10&language=en-US&page=1`,
      });
    
      if (loading) return <p>Loading ....</p>;
    
      if (error !== "") return <p>{error}</p>;
    
      if (!data) return <p>Data was null</p>;

    return (
        <div className="movie">
             {data.results.map(movie => (
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${movie ? movie.backdrop_path : ""}`} />
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                    </div>
                </div>
                
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{movie ? movie.original_title : ""}</div>
                        <div className="movie__rating">
                            {movie ? movie.vote_average: ""} <i className="fas fa-star" />
                        </div>  
                        <div className="movie__releaseDate">{movie ? "Release date: " + movie.release_date : ""}</div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{movie ? movie.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__heading">Production companies</div>
        </div>
            ))}
        </div>
    )
}

export default MovieDetail