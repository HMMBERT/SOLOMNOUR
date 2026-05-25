import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Menu from "./Menu";
import Drinks from "./Drinks";
import CartPage from "./CartPage";
import { CartProvider } from "./CartContext";

import bgMusic from "./assets/BG music.mp3";

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(bgMusic);

    audio.loop = true;
    audio.volume = 0.3;

    audioRef.current = audio;

    const playMusic = async () => {
      try {
        await audio.play();
        document.removeEventListener("click", playMusic);
      } catch (error) {
        console.log("Autoplay blocked:", error);
      }
    };

    document.addEventListener("click", playMusic);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener("click", playMusic);
    };
  }, []);

  return (
    <CartProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}