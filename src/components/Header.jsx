import { Link } from "react-router-dom";
import '../styles/main.scss';
import logo from '../assets/logo.svg';
function Header() {
    return (
      <div className="header">
        <img src={logo} alt='Kasa' className='kasa-logo'>
        </img>
        <nav>
        <Link to="/">Acceuil</Link>
        <Link to="/about">A propos</Link>
      </nav>
      </div>
    )
  }
  
  export default Header