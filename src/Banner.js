import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";


function Banner() {
    const [movie, setMovie] = useState([]);


    //  const instance = axios.create({
    //      baseURL: "​https://api.themoviedb.org/3",
    //  }) 
    
    // const API_KEY = "019a53854ad285e09a5edea42b0d28cb";
    
    // const requests = {
    //     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
    //     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,  
    //     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    //     fetchActorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, 
    //     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
    //     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    //     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
    //     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    // };


    // const url = 'https://api.themoviedb.org/3'+ requests.fetchNetflixOriginals;
    
    // axios.get(url).then(resp =>{
    //     console.log(resp.data);
    // }).catch (function(error){
    //     console.log(error);
    // })

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            );
            return request;
        }
fetchData();

    },[])


console.log(movie);


    function truncate(string,n) {
        return string?.length>n ? string.substr(0,n-1)+'...':string;
    }

    return (
        <header className="banner" 
        style={{
            backgroundSize:'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",   
     }}> 
            <div className="banner-contents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name ||movie?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-description">
                    {truncate(
                        movie?.overview,150)}
                        </h1>
            </div>

            <div className="banner-fadebottom" />   
        </header>
    )

}

export default Banner
