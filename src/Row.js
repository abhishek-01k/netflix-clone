import movieTrailer from 'movie-trailer';
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from "./axios";
import "./Row.css";


function Row({ title, fetchUrl, isLargeRow }) {
// function Row({ title , fetchUrl, isLargeRow = false}) {

    const [movies, setMovies] = useState([]);
    const [visible, setVisible] = useState(false);
    

    const [trailerUrl,setTrailerUrl] = useState("");
   
    const base_url = "https://image.tmdb.org/t/p/original/";

    function truncate(string,n) {
      return string?.length>n ? string.substr(0,n-1)+'...':string;
      
  }

  
  useEffect(() => {
        async function fetchData() {
          const request = await axios.get(fetchUrl);
          console.log(request);
          setMovies(request.data.results);
          return request;
        }
        fetchData();
      }, [fetchUrl]);


   console.log(movies);


    function showName(ea){
      console.log(ea);
    }

    function hideName(){
      setVisible(false);
    }
    
    const opts ={
      height:"390",
      width:"100%",
      playervars:{
        autplay:1,
      },
      
    };

    const handleClick = (movie) => {
      console.log(trailerUrl);
      if(trailerUrl) {
        setTrailerUrl('');
      }
      else {
        console.log(movie.name || movie.original_title);
        movieTrailer( movie.original_title || movie.name || "" )
        .then(url => {
          if(url===null)(alert("Sorry! Not Available"));
          console.log(url)
          const urlParams = new URLSearchParams (new URL(url).search);
          setTrailerUrl( urlParams.get("v"));
        }).catch((error) =>console.log(error));
      }
    };


    return (
        <div className='row'>
            <h2>{title}</h2>
            

      <div id={title} className="row_posters">
        {movies.map((movie) => 
         ( (isLargeRow && movie.poster_path ) || 
          (!isLargeRow && movie.backdrop_path)) && (

            

            <div  className="parental-div" >
            
            
            <img 
            onClick={()=>handleClick(movie)}
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name || movie.original_title}
          />
          
          
          

          {/* <p>{ truncate((movie.name || movie.original_title),10 )    } </p> */}
          </div>

          )
          
           
         )
        }
          
        
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
        </div>
    );
}

export default Row;
