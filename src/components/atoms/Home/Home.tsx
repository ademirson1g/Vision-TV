import React, { useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import "../../style/App.css";

export interface IJsonResposne {
  results: IMovieData[];
  page: number;
}

export interface IMovieData {
  poster_path: string;
  original_title: string;
  original_language: string;
  overview: string;
  release_date: number;
  vote_average: number;
}

const Home: React.FunctionComponent = () => {
  const [loading, data, error, request] = useAxios<IJsonResposne>({
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated?api_key=18efa1c884796c304e2b89592f48fa10&language=en-US&page=1",
  });

  if (loading) return <p>Loading ....</p>;

  if (error !== "") return <p>{error}</p>;

  if (!data) return <p>Data was null</p>;

  return (
    <div>
      {data?.results?.map((movie) => (
        <p key={movie.original_title} style={{ color: "white" }}>
          {movie.original_title} {movie.vote_average}
        </p>
      ))}
    </div>
  );
};

export default Home;
