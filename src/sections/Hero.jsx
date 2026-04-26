import { heropc, heromob } from "../constants/index";
import AnimatedTextLine from "../components/AnimatedTextLine";

const imgSet = [
  { src: heromob, width: 1280 },
  { src: heropc, width: 1920 },
];

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-scroll";
import Marquee from "react-fast-marquee";

const Hero = () => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const aboutText = `Transforma tu cuerpo. Mejora tu mente. 
  Coaching online personalizado con resultados reales, enfoque profesional y seguimiento 
  constante. Empieza hoy y alcanza tu cuerpo ideal. Traza tus propias metas.`;

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        y: 200,
        opacity: 0,
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2",
    );
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex-center flex-col h-screen min-h-225 w-full | bg-secundary | md:min-h-236.70 overflow-hidden"
    >
      {/* HERO BACKGROUND IMAGE */}
      <img
        className="absolute top-0 h-full w-full object-cover opacity-50"
        src={heromob}
        // srcSet={imgSet.map(({ src, width }) => `${src} ${width}w`).join(", ")}
        // sizes="100vw"
        alt="Hero section background image"
        fetchPriority="high"
        decoding="async"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          color: "transparent",
          objectFit: "center",
        }}
      />

      {/* HERO H1 AND TEXT */}
      <div ref={contextRef} className="h-full">
        <div
          style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}
          className="flex-center flex-col h-full w-full p-10 gap-3"
        >
          {/*H1*/}
          <div ref={headerRef} className="flex-center">
            <h1
              href="inicio"
              className="mx-auto banner-h1-responsive text-center font-bold uppercase tracking-wide text-primary | hover:tracking-wider hover:text-MonoRed transition-all ease-in-out duration-300"
            >
              Body & Mind
            </h1>
          </div>

          {/* ABOUT */}
          <div className="banner-text-responsive italic tracking-wide text-white/80 group">
            <p className="banner-text-animation text-left">
              ENTRENA
              <span className="text-MonoRed ml-1">.</span>
            </p>
            <p className="banner-text-animation text-center">
              CRECE
              <span className="text-MonoRed ml-1">.</span>
            </p>
            <p className="banner-text-animation text-right">
              LOGRA
              <span className="text-MonoRed ml-1">.</span>
            </p>
          </div>

          {/*BUTTON*/}
          <div className="mt-10 flex justify-center items-center">
            <Link to="coaching" smooth offset={0} duration={1500}>
              <div className="group flex items-center gap-2 start-btn uppercase cursor-pointer tracking-wide hover:tracking-[0.032em] hover:bg-MonoRed! transition-all ease-in-out duration-300">
                <span className="text-[36px] start-hover">{"["}</span>
                Presiona para empezar
                <span className="text-[36px] start-hover">{"]"}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="absolute bottom-0 w-screen z-30 overflow-hidden ">
        <div className="bg-primary py-3 flex">
          <Marquee autoFill speed={30} direction="right">
            <div className="flex items-center gap-3 mx-3 text-[16px] font-black">
              <span className="text-MonoRed text-[20px]">本文</span>
              <p className="tracking-widest">YOSFIT</p>
            </div>
          </Marquee>
        </div>
      </div>

      {/* LOGO */}
      <div className="absolute top-5 left-10 z-10 md:top-10 overflow-hidden | w-13 h-13 md:w-18 md:h-18 | flex-center rounded-full | bg-secundary border border-primary/10 | cursor-pointer hover:scale-115 transition-all duration-150">
        <a
          href="inicio"
          className="h-full w-full text-[7em] font-medium leading-23 text-primary"
        >
          Y
        </a>
      </div>
    </section>
  );
};

export default Hero;
