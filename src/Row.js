import React, { useEffect, useState } from 'react';
import axios from "./axios";
import "./Row.css";
function Row({ title , fetchUrl, isLargeRow = false}) {

    const [films, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;    
        }

        fetchData();

    },[fetchUrl]);

    console.log(films);

    return (
        <div className='row'>
            <h2>{title}</h2>

            {films.map((movie) => (
                <img 
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} 
                    alt={movie.name}
                    />
            ))}
        </div>
    );
}

export default Row
