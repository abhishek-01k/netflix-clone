import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";
import TypeIt from "typeit-react";



function Banner() {
    const [movie, setMovie] = useState([]);
    // console.log(requests.fetchTrending);

    // console.log(movie);

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

    // new TypeIt ("banner-desc").go();


    function truncate(string,n) {
        return string?.length>n ? <TypeIt> {string.substr(0,n-1)+'...'}</TypeIt>: string;
    }

    return (
        <header className="banner" 
        style={{
            backgroundSize:'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            
               
     }}> 
            <div className="banner-contents">
                
                <div>


                <h1 className="banner-title">
                
                    {movie?.title || movie?.name ||movie?.original_name}
                
                </h1>
                
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button btn-2">My List</button>
                </div>

                
                <h1 id="banner-desc" className="banner-description">
                    {truncate(
                        movie?.overview,150)}    
                </h1>
                </div>
            </div>

            <div className="banner-fadebottom" />   
        </header>
    )

}

export default Banner
