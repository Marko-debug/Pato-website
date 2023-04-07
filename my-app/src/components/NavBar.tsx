import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/navbar.css';

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