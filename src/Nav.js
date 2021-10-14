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
        return () =>document.removeEventListener('scroll',transitionNavbar)
    }, []);

    return( 
        <div className={`nav ${show && "nav-black"}`} >
            <div className="nav-content">
                <img className="nav-logo"
                    src="netflix-trans.png" alt="netflix-logo"/>

                <img className="nav-avatar"
                    src="avatar.png" alt="netflix-logo"/>
            </div>  
        </div>
        );
} 


export default Nav;