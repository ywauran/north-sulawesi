import React from "react";
import NavBar from "./components/navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Recommendation from "./pages/Recommendation";
import Browsing from "./pages/Browsing";
import Details from "./pages/Details";
import Explore from "./pages/Explore";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/explore" element={<Browsing />} />
          <Route path="/recomendation" element={<Recommendation />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/explore/:id" element={<Explore />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
