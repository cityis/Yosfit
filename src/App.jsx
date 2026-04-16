import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Highlights from "./sections/Highlights";
import Reviews from "./sections/Reviews";
import Programas from "./sections/Programas";
import Precios from "./sections/Precios";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import ReactLenis from "lenis/react";

const App = () => {
  return (
    <ReactLenis
      root
      className="relative w-screen min-h-screen overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <Highlights />
      <Reviews />
      <Programas />
      <Precios />
    </ReactLenis>
  );
};

export default App;
