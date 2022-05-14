import { NavLink } from "react-router-dom";
import '../styles/main.scss';
import logo from '../assets/logo.svg';
function Header() {
    return (
      <div className="header">
        <img src={logo} alt='Kasa' className='kasa-logo'>
        </img>
        <nav>
        <NavLink className={({ isActive }) => (isActive ? "navLink navLink--active" : "navLink")} to="/">Acceuil</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "navLink navLink--active" : "navLink")} to="/about">A propos</NavLink>
      </nav>
      </div>
    )
  }
  
  export default Header