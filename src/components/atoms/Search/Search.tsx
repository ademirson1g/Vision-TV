import React,{useState,useEffect} from 'react';
import { FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom';

import '../../style/Search.css'

const Search: React.FunctionComponent = () => {

    const [movieSearch, setMovieSearch] = useState([]);
    const [tvSearch, setTvSearch] = useState([]);
    const [query, setQuery] = useState("");    
    const API_KEY = '18efa1c884796c304e2b89592f48fa10';

    useEffect( () => {
        getMoviesByQuery();
        getSeriesByQuery();
    }, [query]);
    
    async function getSeriesByQuery(){
        if(query.length >= 3){
            const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}`); 
            const data = await response.json();
            setTvSearch(data.results);
        }
        else
            setTvSearch([]);
    }

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
        <div className="align">
                <input id="search" name="search" type="text" placeholder='Search...' value={query} onChange={updateQuery} />
                <div className='form__field'>
                <FaSearch color='white' />
                    {
                        tvSearch.map(movie => (
                            <div key={movie.id}>
                                <Link to={`/tv/${movie.id}`}>
                                    <p style={{color:"white", fontSize:"12px", padding:"5px", textDecoration:"none"}}>{movie.name}</p>
                                </Link>
                            </div>
                    ))}
                     {
                        movieSearch.map(movie => (
                            <div key={movie.id}>
                                <Link to={`/movie/${movie.id}`}>
                                    <p style={{color:"white", fontSize:"12px", padding:"5px", textDecoration:"none"}}>{movie.title}</p>
                                </Link>
                            </div>
                    ))}
            </div>
        </div>
    );
}

export default Search;