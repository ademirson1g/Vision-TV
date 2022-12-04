import React from 'react'
import { useParams } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';

import '../../style/MovieList.css'
import SeriesCard from './Series';

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
  }

  const SeriesList: React.FunctionComponent = () => {
    const {type} = useParams()
    const [loading, data, error, request] = useAxios<IJsonResposne>({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${type ? type : "popular"}?api_key=18efa1c884796c304e2b89592f48fa10&language=en-US&page=1`,
      });
    
      if (loading) return <p>Loading ....</p>;
    
      if (error !== "") return <p>{error}</p>;
    
      if (!data) return <p>Data was null</p>;
    
      return (
        <div className='movie__list'>
        <h2 className='list__title'>{(type ? type : "Popular").toUpperCase()}</h2>
        <div className='list__cards'>
          <SeriesCard />
        </div>
    </div>
      )
}

export default SeriesList