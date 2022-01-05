import React, { useState , useEffect} from "react";
import "./Nav.css";

function Nav(){

    const [show, handleShow] = useState(false);

    const transitionNavbar = () =>{
        if(window.scrollY>100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", transitionNavbar);
        return () => document.removeEventListener('scroll',transitionNavbar)
    }, []);

    return( 
        <div className={`nav ${show && "nav-black"}`} >
            <div className="nav-content">
                <img className="nav-logo"
                    src="netflix-trans.png" alt="netflix-logo" />

                <div className="mid-nav">
                <div className="Action"><a href="#Top Rated">Action</a>  </div>    
                <div className="Comedy"><a href="#Action Movies">Comedy</a></div>    
                <div className="Horror"><a href="#Comedy Movies">Horror</a> </div>    
                <div className="Romance"><a href="#Horror Movies">Romance</a> </div>    
                <div className="Doc"><a href="#Documentaries">Documentaries</a> </div>    
                {/* <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> */}
                
                
                {/* <div>Comedy</div>    
                <div>Horror</div>    
                <div>Romance</div>    
                <div>Documentaries</div>   */}

                </div>
                
                

                  


                    

                <img className="nav-avatar"
                    src="avatar.png" alt="netflix-logo"/>
            </div>  
        </div>
        );
} 


export default Nav;