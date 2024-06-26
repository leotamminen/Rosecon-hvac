import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Yhteystiedot from "./pages/Yhteystiedot";
import Palvelut from "./pages/Palvelut";
import Asiakastarinat from "./pages/Asiakastarinat";
import Navbar from "./Navbar";
import Etusivu from "./pages/Etusivu";
import DenseAppBar from "./appbar";

function App() {
  return (
    <div className="App">
      <DenseAppBar/>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Etusivu />} />
          <Route path="/about" element={<About />} />
          <Route path="/yhteystiedot" element={<Yhteystiedot />} />
          <Route path="/palvelut" element={<Palvelut />} />
          <Route path="/asiakastarinat" element={<Asiakastarinat />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;