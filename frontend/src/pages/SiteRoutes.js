import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../About";
import App from "../App";
import Yhteystiedot from "./Yhteystiedot";
import Palvelut from "./Palvelut";
import Asiakastarinat from "./Asiakastarinat";
import Etusivu from "./Etusivu";

const SiteRoutes = () => {
  return (
    <Router>
      <Routes>
        {" "}
        <Route path="/" element={<Etusivu />} />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/yhteystiedot" element={<Yhteystiedot />} />{" "}
        <Route path="/palvelut" element={<Palvelut />} />{" "}
        <Route path="/asiakastarinat" element={<Asiakastarinat />} />{" "}
      </Routes>{" "}
    </Router>
  );
};

export default SiteRoutes;
