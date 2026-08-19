import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
        <header>
      <h1 className="logo">BrandStream</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="logo_link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="logo_link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="logo_link">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="logo_btn">
        <button>Login</button>
      </div>
      </header>
    </div>

    
  );
};

export default Navbar;
