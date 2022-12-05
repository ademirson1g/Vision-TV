import React , {useEffect, useState} from 'react'
import { FaStar } from 'react-icons/fa';
import {useParams} from 'react-router-dom'

import "../../style/MovieDetail.css"

import SeriesVideoList from '../VideoList/SeriesVideoList';

const SeriesDetail: React.FunctionComponent = () => {
    const [movieDetail, setMovie] = useState<any[]>([])

  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=15adc4cf6388a9d835667a7400191617&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <>
      {movieDetail && (
        <>
            {/* Background path */}
            <div className='fade-in'>
          <div
            className="banner"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original${
                movieDetail ? movieDetail['backdrop_path'] : ''
              }")`
            }}
          ></div>

          <div 
            className="movie-content" 
            style={{marginBottom:"5px"}}>
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url("https://image.tmdb.org/t/p/w500${
                    movieDetail ? movieDetail["poster_path"] : ''
                  }")`,
                }}
              >
              </div>
            </div>
            
            <div className="movie-content__info">
              <h1 className="title">
                {movieDetail ? movieDetail["original_title"] : ''}
              </h1>

              <div className="genres">
                {movieDetail["genres"] &&
                  movieDetail["genres"].slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres__item">
                      {genre.name}
                    </span>
                  ))}
              </div>

              <div className="movie__tagline">
                {movieDetail ? movieDetail["tagline"] : ''}
              </div>

              <div className="movie__rating">
                {movieDetail ? movieDetail["vote_average"] : ''}{' '}
                <i><FaStar style={{color:"yellow"}} /></i>
                <span className="movie__voteCount">
                  {movieDetail ? '(' + movieDetail["vote_count"] + ') votes' : ''}
                </span>
              </div>

              <div className="movie__releaseDate" style={{marginBottom:"40px"}}>
                {movieDetail ? 'Release date: ' + movieDetail["first_air_date"] : ''}
              </div>

              <div className="movie-overview">
                <h1 style={{fontSize: '40px', marginTop:"40px"}}>Overview</h1>
                <br />
                <p className="overview">{movieDetail["overview"]}</p>
              </div>
            </div>
          </div>

          <div>
            <SeriesVideoList />
          </div>
      </div>
        </>
      )}
    </>
  );
};

export default SeriesDetail