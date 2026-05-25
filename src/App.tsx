import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Menu from "./Menu";
import Drinks from "./Drinks";

import bgMusic from "./assets/BG music.mp3";

export default function App() {
  useEffect(() => {
    const audio = new Audio(bgMusic);

    audio.loop = true;
    audio.volume = 0.3;

    audio.play().catch((err) => {
      console.log("Autoplay blocked:", err);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

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