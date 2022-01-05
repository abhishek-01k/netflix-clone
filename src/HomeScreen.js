import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import requests from "./Requests";
import Row from "./Row";
import { Scrollbar } from "react-scrollbars-custom";
import Footer from "./Footer";


function HomeScreen(){
    return( 
        // <Scrollbar style={{ width: 250, height: 250 }}>
    <div className="homescreen" >
   
            <Nav />

            

            <Banner />
            {/* Row*/ } 
            <Row 
                title = 'Netflix Originals'
                fetchUrl = {requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row 
                title = "Trending Now"
                fetchUrl = {requests.fetchTrending}
                isLargeRow
            />
            <Row
                title = "Top Rated"
                fetchUrl = {requests.fetchTopRated}
                isLargeRow
            />
            <Row
                title = "Action Movies"
                fetchUrl = {requests.fetchActionMovies}
                
            />
            <Row 
                title = "Comedy Movies"
                fetchUrl = {requests.fetchComedyMovies}
                            
            />
            <Row
                title = "Horror Movies"
                fetchUrl = {requests.fetchHorrorMovies}            
            />
            <Row
                title = "Romance Movies"
                fetchUrl = {requests.fetchRomanceMovies}            
            />
            <Row
                title = "Documentaries"
                fetchUrl = {requests.fetchDocumentaries}            
            />
            
        <Footer />


    </div>
    // </Scrollbar>

);
} 


export default HomeScreen;