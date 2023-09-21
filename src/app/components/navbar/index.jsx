import { Link } from "react-router-dom";
import './navbar.scss'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1 className="navbar__title" >WebDex</h1>
      <div className="navbar__links">
          <Link className="navbar__link" to="/">Home</Link>
          <Link className="navbar__link" to="/teambuilder">Teambuilder</Link>
      </div>
    </nav>
    );
}

export default Navbar;