import React from 'react'
import "./Footer.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

export const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();


    return (
        <div className='footer'>
            <div className='socialIconsdiv'>
            <div className='facediv'> <FacebookIcon className='facebook'  /></div>
            <div className='facediv'> <InstagramIcon className='instagram' /></div>
            <div className='facediv'> <TwitterIcon className='twitter'   /></div>
            <div className='facediv'><YouTubeIcon className='youtube'     /></div>
            </div>

            <div className='footer-content'>
                <div className='first-content'>
                    <ul>
                        <li>Audios and subtitles</li>
                        <li>Press</li>
                        <li>Privacy</li>
                        <li>Contact Us</li>
                        <li>Service Code</li>
                    </ul>
                </div>
                <div className='second-content'>
                    <ul>
                        <li>Descriptive audio</li>
                        <li>Relationship with Investors</li>
                        <li>Legal Notices</li>
                    </ul>
                </div>
                <div className='third-content'>
                    <ul>
                        <li>Help Center</li>
                        <li>Careers</li>
                        <li>Cookies preferences</li>
                    </ul>
                </div>
                <div className='fourth-content'>
                    <ul>
                        <li>Gift Cards</li>
                        <li>Terms of use</li>
                        <li>Corporate information</li>
                    </ul>
                </div>

            </div>
            
            <div className='rights'>
                <p>&copy; 1997- {year} Netflix Clone. Inc </p> 
                {/* Copyright &copy: <span> {year}</span> */}
            </div>
            
        </div>
    )
}


export default Footer;