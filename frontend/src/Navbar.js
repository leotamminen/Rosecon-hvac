import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import About from "./About";
import Yhteystiedot from "./Yhteystiedot";
import Palvelut from "./Palvelut";
import Asiakastarinat from "./Asiakastarinat";

const Navbar = () => {
  return (
    <>
      <Link to="/" className="navbar-logo">
        <img src="/favicon.ico" alt="Logo" className="navbar-logo-img" />
        <h1>Rosecon hvac</h1>
      </Link>
      <nav className="navbar">
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
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/yhteystiedot" element={<Yhteystiedot />} />
        <Route path="/palvelut" element={<Palvelut />} />
        <Route path="/asiakastarinat" element={<Asiakastarinat />} />
      </Routes>
    </>
  );
};

export default Navbar;
