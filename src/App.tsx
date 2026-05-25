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

    const playMusic = () => {
      audio.play();
      document.removeEventListener("click", playMusic);
    };

    document.addEventListener("click", playMusic);

    return () => {
      audio.pause();
      document.removeEventListener("click", playMusic);
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