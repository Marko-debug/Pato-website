import { NavLink } from 'react-router-dom';
import '../style/navbar.css';

export function Footer(){
    return(
        <footer>
            <div className="social-media">
                <NavLink className="bx bxl-facebook'" to=""></NavLink>
                <NavLink to=""></NavLink>
                <NavLink to=""></NavLink>
            </div>
        </footer>
    )
}