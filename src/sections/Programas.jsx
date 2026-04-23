import { programas } from "../constants";
import ProgramasTiers from "../components/ProgramasTiers";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Programas = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const lineRef = useRef(null);

  const programData = programas[0];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#programas",
        start: "top 60%",
      },
    });
    tl.from(titleRef.current, {
      x: "-50vw",
      opacity: 0,
      duration: 1.25,
      ease: "circ.out",
    })
      .from(
        subTitleRef.current,
        {
          x: "50vh",
          opacity: 0,
          duration: 1.3,
          ease: "circ.out",
        },
        "<+0.2",
      )
      .from(
        lineRef.current,
        {
          x: "-100vw",
          duration: 3,
          ease: "power2.inOut",
        },
        "<+0.2",
      );
  }, []);

  return (
    <section
      id="programas"
      className="w-screen h-full common-padding overflow-hidden"
    >
      <div className="w-full">
        <div
          // style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}
          className="mb-12 lg:mb-15 px-5 w-full flex flex-col items-center justify-center | xl:flex-row xl:justify-between xl:items-center"
        >
          <h2 ref={titleRef} className="programas-h1-responsive">
            Programas
          </h2>

          <p
            ref={subTitleRef}
            className="xl:w-[23%] 2xl:w-[22%] xl:pr-5 text-base md:text-[21px] lg:text-2xl xl:text-base 2xl:text-[20px] leading-6.5 text-neutral-600 font-light xl:text-justify"
          >
            Aprende a hacer ejercicio con la{" "}
            <span className="text-MonoRed">forma adecuada</span> en un
            entrenamiento de cuerpo completo que trabaja la{" "}
            <span className="font-medium">
              flexibilidad, la fuerza y la estabilidad en general.
            </span>
          </p>
        </div>

        {/* LINEA */}
        <div className="bg-transparent h-0.5 w-full overflow-hidden">
          <div ref={lineRef} className="bg-black h-full w-full" />
        </div>

        {/* PROGRAMAS */}
        <ProgramasTiers tier="principiante" />
        <ProgramasTiers tier="intermedio" />
        <ProgramasTiers tier="avanzado" />
      </div>
    </section>
  );
};

export default Programas;
