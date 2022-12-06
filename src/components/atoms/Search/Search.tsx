import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

import '../../style/Search.css'

const Search: React.FunctionComponent = () => {

    const [movieSearch, setMovieSearch] = useState([]);
    const [tvSearch, setTvSearch] = useState([]);
    const [query, setQuery] = useState("");    
    const API_KEY = '18efa1c884796c304e2b89592f48fa10';

    useEffect( () => {
        const timeout = setTimeout(() => {
            getMoviesByQuery();
            getSeriesByQuery();
        }, 1000)
        return () => clearTimeout(timeout)
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
        <div>
            <div style={{borderColor:"white", borderStyle:"double", textAlign:"center" , borderWidth:"50%", borderRadius:"2px", padding:"5px"}}>
            <input type="text" placeholder='Press to Search' value={query} onChange={updateQuery} style={{width:"100%"}} />
            </div>
            <div className='form__field' >
                {
                    tvSearch.map(tv => (
                        <div key={tv.id}>
                            <Link to={`/tv/${tv.id}`} style={{textDecoration: 'none'}}>
                                <span style={{color:"white", padding:"5px"}} >{tv.name}</span>
                            </Link>
                        </div>
                ))}
                    {
                    movieSearch.map(movie => (
                        <div key={movie.id} >
                            <Link to={`/movie/${movie.id}`} style={{textDecoration: 'none'}}>
                                <span style={{color:"white", padding:"5px"}}>{movie.title}</span>
                            </Link>
                        </div>
                ))}
        </div>
    </div>
    );
}

export default Search;