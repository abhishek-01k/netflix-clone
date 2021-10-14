import React,{  useState, useEffect} from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";


function Banner() {
    const [movie, setMovie] = useState([]);

    // const url = 'https://api.themoviedb.org/3'+'/discover/tv?api_key='+'019a53854ad285e09a5edea42b0d28cb'+'&with_networks=213';
    
    // axios.get(url).then(resp =>{
    //     console.log(resp.data);
    // });

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                
                ]
            );
           return request;
        }

       fetchData();
    }, []);    

    console.log(movie);

    function truncate(string,n) {
        return string?.length>n ? string.substr(0,n-1)+'...':string;
    }

    return (
        <header className="banner" 
        style={{
            backgroundSize:'cover',
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
            backgroundPosition: "center center",   
     }}> 
            <div className="banner-contents">
                <h1 className="banner-title">MovieName</h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-description">
                    {truncate(
                        `This is test description`,150)}
                        </h1>
            </div>

            <div className="banner-fadebottom" />   
        </header>
    )

}

export default Banner
