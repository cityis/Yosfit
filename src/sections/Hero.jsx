import { heropc, heromob } from "../constants/index";
import AnimatedTextLine from "../components/AnimatedTextLine";
import SmashButton from "../components/SmashButton";

const imgSet = [
  { src: heromob, width: 1280 },
  { src: heropc, width: 1920 },
];

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-scroll";

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
      className="relative flex flex-col justify-center items-center h-screen min-h-225 w-full | bg-black border-b-3 border-white |  md:min-h-236.70"
    >
      {/* HERO BACKGROUND IMAGE */}
      <img
        className="absolute top-0 h-full w-full object-cover opacity-50  | 2xl:opacity-80"
        src={heropc}
        srcSet={imgSet.map(({ src, width }) => `${src} ${width}w`).join(", ")}
        sizes="100vw"
        alt="Hero background image"
        fetchPriority="high"
        decoding="async"
        // style={{
        //   position: "absolute",
        //   height: "100%",
        //   width: "100%",
        //   left: 0,
        //   top: 0,
        //   right: 0,
        //   bottom: 0,
        //   color: "transparent",
        //   objectFit: "center",
        // }}
      />

      {/* HERO H1 AND TEXT */}
      <div
        ref={contextRef}
        className="absolute inset-0 flex grow w-full justify-center items-center | 2xl:grid 2xl:grid-cols-2"
      >
        <div
          style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}
          className="flex flex-col h-full w-full p-1 justify-center items-center | lg:gap-6 2xl:col-start-2 2xl:justify-self-center 2xl:items-start"
        >
          {/*H1*/}
          <div
            ref={headerRef}
            className="z-10 flex items-center justify-center"
          >
            <div>
              <a
                href="inicio"
                className="block mx-auto banner-h1-responsive text-center font-bold uppercase tracking-widest text-white hover:text-MonoRed transition-all cursor-pointer | lg:tracking-[0.15em] lg:text-left"
              >
                Yosfit
              </a>
            </div>
          </div>

          <div className="flex flex-col mt-10 z-10 px-3 text-center justify-center items-center| sm:mt-12">
            {/*p*/}
            <AnimatedTextLine
              text={aboutText}
              className="font-normal banner-text-responsive text-center tracking-wide text-white/80 | sm:px-2 md:w-175"
            />

            {/*BUTTONS*/}
            <div className="flex flex-col mt-4 gap-5 w-full justify-between items-center | sm:mt-8 md:mt-10 md:flex-row md:max-w-3xl">
              {/* <SmashButton /> */}
              <a href="#" className="group button w-[75%] cursor-pointer">
                <button className=" w-full font-semibold button-text-responsive uppercase cursor-pointer">
                  Empieza hoy mismo
                </button>
              </a>
              <Link
                to="programas"
                smooth
                offset={0}
                duration={1500}
                className="button2 w-[75%] cursor-pointer"
              >
                <button className="font-semibold button-text-responsive uppercase w-full cursor-pointer">
                  Workouts
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
