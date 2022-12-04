import React,{ReactNode} from 'react'

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import "../../style/Card.css"
import { Link } from "react-router-dom"
import { useAxios } from '../../hooks/useAxios';

import {FaStar} from 'react-icons/fa'

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
    first_air_date: number;
    vote_average: number;
  }

  export interface IAuthRouteProps {
    movie? : ReactNode | undefined;
  }


const SeriesCard: React.FunctionComponent<IAuthRouteProps> = (props) => {
    function reload() {
        window.location.reload();
      }      
    const { movie } = props;
    const [loading, data, error, request] = useAxios<IJsonResposne>({
        method: "GET",
        url: "https://api.themoviedb.org/3/tv/top_rated?api_key=18efa1c884796c304e2b89592f48fa10&language=en-US&page=1",
      });
    
      if (loading) return <p>Loading ....</p>;
    
      if (error !== "") return <p>{error}</p>;
    
      if (!data) return <p>Data was null</p>;

    return (
        <>
        {data.results.slice(0,10).map(movie => (
            <div   onClick={reload} >
                <SkeletonTheme highlightColor="#444">
                    <Skeleton height={300} duration={2} />
                </SkeletonTheme>
                <Link to={`/tv/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                <div className="cards">
                    <img className="cards__img" src={'https://image.tmdb.org/t/p/original' + movie.poster_path} alt="Card Image" />
                    <div className="cards__overlay">
                        <div className="card__title">{movie.original_title}</div>
                        <div className="card__runtime">
                            {movie?movie.first_air_date:""}
                            <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /> 
                                <FaStar style={{color:"yellow"}} />
                            </span>
                        </div>
                        <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                    </div>
                </div>
            </Link>
        </div>
    ))}
        </>
    )
}

   

export default SeriesCard;