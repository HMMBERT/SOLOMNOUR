import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Menu from "./Menu";
import Drinks from "./Drinks";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/drinks" element={<Drinks />} />
      </Routes>
    </Router>
  );
}