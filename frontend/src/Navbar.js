import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <Link to="/" className="navbar-logo">
          <img src="/favicon.ico" alt="Logo" className="navbar-logo-img" />
          <h1>Rosecon HVAC</h1>
        </Link>
      </div>
      <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
        {"rere"}
      </button>
      <div className={`navbar-links ${isOpen ? "show" : ""}`}>
        {
          <div>
            <Link to="/palvelut" className="navbar-button">
          Palvelut
        </Link>
        <Link to="/about" className="navbar-button">
          About
        </Link>
        <Link to="/asiakastarinat" className="navbar-button">
          Asiakastarinat
        </Link>
        <Link to="/yhteystiedot" className="navbar-button">
          Yhteystiedot
        </Link>
          </div>
        }
      </div>
      <div className="navbar-links">
        
      </div>
    </nav>
  );
};

export default Navbar;