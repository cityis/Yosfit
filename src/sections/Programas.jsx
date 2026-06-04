import { programas } from "../constants";
import VerticalHeader from "../components/VerticalHeader";
import ProgramasTiers from "../components/ProgramasTiers";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Link } from "react-scroll";

const Programas = () => {
  const textHeader = "Programas";
  const textPara =
    "Aprende a hacer ejercicio con la forma adecuada mediante diferentes programas";
  const textRed = "especializados";

  const previewRef = useRef(null);
  const moveX = useRef(null);
  const moveY = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const backgroundRefs = useRef({});

  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });
  });

  const [currentIndex, setCurrentIndex] = useState(null);
  const handleMouseEnter = (tierIdx, progIdx) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex({ tierIdx, progIdx });

    const key = `${tierIdx}-${progIdx}`;
    const el = backgroundRefs.current[key];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 0.15,
        ease: "power2.out",
      },
    );

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.33,
      ease: "power2.out",
    });
  };
  const handleMouseLeave = (tierIdx, progIdx) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);

    const key = `${tierIdx}-${progIdx}`;
    const el = backgroundRefs.current[key];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.33,
      ease: "power2.out",
    });
  };
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;

    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section
      id="programas"
      className="w-screen h-full common-padding flex flex-col overflow-hidden"
    >
      {/* HEADER */}
      <VerticalHeader
        scrollTrig="#programas"
        h2Text={textHeader}
        pText={textPara}
        spanText={textRed}
        black={true}
        big={true}
      />

      {/* PROGRAMS */}
      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {programas.map((tier, tierIndex) => (
          // TIER NAME
          <div key={tier.id}>
            <div className="my-6 flex-center gap-2 | md:mx-6 md:justify-start">
              <h3 className="text-[20px] italic">{tier.name}</h3>
              <span className="text-2xl text-MonoRed font-black">
                {tier.nameJap}
              </span>
            </div>

            {/* TIER PROGRAMS */}
            {tier.programs.map((program, progIndex) => {
              const key = `${tierIndex}-${progIndex}`;
              return (
                <div
                  key={program.id}
                  id="program"
                  className="group relative py-6 flex flex-col gap-1 cursor-pointer | "
                  onClick={() => toggleItem(program.id)}
                  aria-expanded={openIndex === program.id}
                  onMouseEnter={() => handleMouseEnter(tierIndex, progIndex)}
                  onMouseLeave={() => handleMouseLeave(tierIndex, progIndex)}
                >
                  {/* BACKGROUND */}
                  <div
                    ref={(el) => {
                      backgroundRefs.current[key] = el;
                    }}
                    className="hidden absolute inset-0 -z-10 bg-MonoRed clip-path transition-all duration-300 | md:block"
                  />
                  {/* TITLE */}
                  <div className="px-1 flex justify-between items-center transition-all duration-600 | md:group-hover:px-6 md:group-hover:text-primary">
                    <Link
                      className="w-full h-full text-[24px] font-normal tracking-tight leading-none uppercase | sm:text-[36px] md:text-[40px] xl:text-[48px]"
                      to="sub"
                      smooth
                      offset={0}
                      duration={1500}
                    >
                      {program.name}
                    </Link>
                    <p className="md:hidden text-MonoRed | sm:text-lg">
                      {program.category}
                    </p>
                  </div>
                  {/* DIVIDER */}
                  <div className="w-full h-px bg-secundary transition-all duration-600 md:group-hover:bg-primary" />
                  {/* OBJECTIVE */}
                  <div className="px-1 transition-all duration-600 md:group-hover:px-6 md:group-hover:text-primary">
                    <p className="text-sm | sm:text-[18px] md:text-xl xl:text-[24px]">
                      {program.objective}
                    </p>
                  </div>
                  {/* MOB IMAGE */}
                  {openIndex === program.id && (
                    <div className="h-80 relative flex-center | md:hidden">
                      <img
                        src={program.image}
                        alt={`Image of the ${program.name} program`}
                        className="w-full h-full object-cover rounded-md brightness-50"
                      />
                      <div className="absolute inset-0 px-5 pb-10 h-full flex justify-end items-center flex-col ">
                        <p className="p-4 text-[14px] text-primary/90 text-justify tracking-wide bg-primary/10 backdrop-blur-md border border-primary/5 rounded-lg | sm:text-base">
                          {program.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
        {/* DESKTOP IMAGE */}
        <div
          ref={previewRef}
          className="hidden fixed z-20 programas-desktopImage-responsive overflow-hidden pointer-events-none opacity-0 | md:block"
        >
          {currentIndex && (
            <img
              src={
                programas[currentIndex.tierIdx].programs[currentIndex.progIdx]
                  .image
              }
              alt="Image preview"
              className="object-cover w-full h-full brightness-90"
            />
          )}
          {currentIndex && (
            <div className="absolute inset-0 px-5 pb-10 h-full flex justify-end items-center flex-col | xl:px-10 xl:pb-20 ">
              <p className="p-4 text-primary/90 text-justify tracking-wide bg-primary/10 backdrop-blur-md border border-primary/5 rounded-lg | lg:text-lg xl:text-xl">
                {
                  programas[currentIndex.tierIdx].programs[currentIndex.progIdx]
                    .description
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Programas;
