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

interface StateNavBar{
    active: boolean;
    class: string;
}

class NavBar extends React.Component<PropsNavBar, StateNavBar>{
    constructor(props: PropsNavBar){
        super(props);
        this.state = {active: false, class: 'dropdown-links-container'};
    }
    
    dropMenu = () => {
        if(this.state.active){
          this.setState({active: false,class: 'dropdown-links-container'})
        }else{
          this.setState({active: true,class: 'dropdown-links-container show'})
        }
      }

    render(): React.ReactNode {
        
        return (
            <header className="header">
                <div className="navbar-logo">
                    <NavLink to="#" className="logo">Logo</NavLink>
                </div>
                <div className="navbar-1">
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
                </div>
                <nav className="navbar-2">
                    <div className="login-container">
                        <button className="login" onClick={() => this.props.openAndCloseLogIn(true)}>Prihlásiť sa</button>
                        {/* <div className="icon-login">Prihlásený</div> */}
                    </div>
                    <div className="links-container">
                        <NavLink className="active" to="/">
                            Domov
                        </NavLink>
                        <NavLink to="about">O nás</NavLink>
                        <NavLink to="contact">Kontakt</NavLink>
                    </div>

                    <div className="dropdown">
                        <button className="dropbtn" onClick={() => this.dropMenu()}>
                            <svg className="dropdown-menu-svg" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" height="40" width="80">
                            <polyline points="64 32 24 32"></polyline>
                            <polyline points="56 22 16 22"></polyline>
                            <polyline points="64 12 24 12"></polyline>
                            </svg>
                        </button>
                        <div id="dropDown" className={this.state.class}>
                            <NavLink className="active" to="/">
                                Domov
                            </NavLink>
                            <NavLink to="about">O nás</NavLink>
                            <NavLink to="contact">Kontakt</NavLink>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default NavBar;