import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

import '../../style/Search.css'

const Search: React.FunctionComponent = () => {

    const [movieSearch, setMovieSearch] = useState([]);    
    const [query, setQuery] = useState("");    
    const API_KEY = '18efa1c884796c304e2b89592f48fa10';

    useEffect( () => {
        getMoviesByQuery();
    }, [query]);
    
    async function getMoviesByQuery(){
        if(query.length >= 3){
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`); 
            const data = await response.json();
            setMovieSearch(data.results);
        }
        else
            setMovieSearch([]);
    }

    function updateQuery(e){
        setQuery(e.target.value);
    }

    return(
        <div className="search">
            <div className="search-bar">
                <input type="text" id="search" value={query} onChange={updateQuery}/>
                <i className="fas fa-search"></i>
                <div className="search-list">
                    {
                        movieSearch.map( movie => (
                            <div key={movie.id} className="search-item">
                                <img src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                                    <Link to={`/movie/${movie.id}`}>
                                        <p className="title">{movie.title}</p>
                                    </Link>
                                    <p className="overview">{movie.overview.substring(0,100)}</p> 
                                </div>
                        ))
                    }
                </div>
            </div>
            </div>
    );
}

export default Search;