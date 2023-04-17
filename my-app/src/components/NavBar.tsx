import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTiktok,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

interface PropsNavBar{
    openAndCloseLogIn: (param: boolean) => void;
}

class NavBar extends React.Component<PropsNavBar>{
    constructor(props: PropsNavBar){
        super(props)
    }
    
    render(): React.ReactNode {
        
        return (
            <header className="header">
                <div className="navbar-1">
                    <NavLink to="#" className="logo">Logo</NavLink>
                    <div className="social-navbar">
                    <a 
                        href="https://www.facebook.com/"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a 
                        href="https://www.instagram.com/"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a 
                        href="https://www.youtube.com/"
                        className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    <a 
                        href="https://www.tiktok.com/en/" 
                        className="tiktok social">
                        <FontAwesomeIcon icon={faTiktok} size="2x" />
                    </a>
                </div>
                    <button className="login" onClick={() => this.props.openAndCloseLogIn(true)}>Prihlásiť sa</button>
                    {/* <div className="icon-login">Prihlásený</div> */}
                </div>
                <nav className="navbar-2">
    
                    <React.Fragment>
                        <NavLink className="active" to="/">
                            Domov
                        </NavLink>
                        <NavLink to="about">O nás</NavLink>
                        <NavLink to="contact">Kontakt</NavLink>
                    </React.Fragment>
                </nav>
            </header>
        )
    }
}

export default NavBar;