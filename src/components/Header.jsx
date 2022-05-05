import { Link } from "react-router-dom";
import '../styles/main.scss';
function Header() {
    return (
      <div className="header">
        <h1>Hello</h1>
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Acceuil</Link>
        <Link to="/about">A propos</Link>
      </nav>
      </div>
    )
  }
  
  export default Header