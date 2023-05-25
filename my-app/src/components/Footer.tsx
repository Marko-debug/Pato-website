import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTiktok,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

  const getYear: any = () =>  {
    return new Date().getFullYear();
}

export function Footer(){
    return(
        <footer>
            <div className="footer-container">
                <div className="social-container">
                    <a 
                        href="https://www.facebook.com/"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="3x" />
                    </a>
                    <a 
                        href="https://www.instagram.com/"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </a>
                    <a 
                        href="https://www.youtube.com/"
                        className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="3x" />
                    </a>
                    <a 
                        href="https://www.tiktok.com/en/" 
                        className="tiktok social">
                        <FontAwesomeIcon icon={faTiktok} size="3x" />
                    </a>
                </div>
                <div className="signature">
                    <span>
                    © {getYear()} Your Name, created by M.Orihel
                    </span>
                </div>
            </div>
        </footer>
    )
}