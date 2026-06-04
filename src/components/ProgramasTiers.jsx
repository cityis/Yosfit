import { programas } from "../constants";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ProgramasTiers = ({ scrollTrig }) => {
  const containerRef = useRef([]);
  const previewRef = useRef(null);
  const overlayRefs = useRef([]);
  const imageRefs = useRef([]);
  const [currentProgram, setCurrentProgram] = useState(null);
  const [expandIndex, setExpandIndex] = useState(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      y: "50vh",
      opacity: 0,
      delay: 0.6,
      duration: 1.2,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: scrollTrig,
      },
    });
  }, []);

  // MOB IMAGE DRAWER
  const handleContainerClick = (index) => {
    if (expandIndex === index) {
      collapseImage(index);
      setExpandIndex(null);
    } else {
      if (expandIndex !== null) {
        collapseImage(expandIndex);
      }
      expandImage(index);
      setExpandIndex(index);
    }
  };

  const expandImage = (index) => {
    if (window.innerWidth >= 768) return;
    const imageContainer = imageRefs.current[index];
    if (!imageContainer) return;

    gsap.killTweensOf(imageContainer);

    gsap.fromTo(
      imageContainer,
      {
        height: 0,
        opacity: 0,
        display: "flex",
      },
      {
        height: "400px",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        // clearProps: "height",
      },
    );
  };

  const collapseImage = (index) => {
    if (window.innerWidth >= 768) return;
    const imageContainer = imageRefs.current[index];
    if (!imageContainer) return;

    gsap.killTweensOf(imageContainer);

    gsap.to(imageContainer, {
      height: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(imageContainer, { display: "none" });
      },
    });
  };

  // DESKTOP IMAGE HOVER

  const handleMouseEnter = (program, event, index) => {
    if (window.innerWidth < 768) return;
    setCurrentProgram(program);

    const el = overlayRefs.current[index];
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

    // Get the actual position of the hovered element
    const hoveredElement = event.currentTarget;
    const hoveredRect = hoveredElement.getBoundingClientRect();
    const containerRect =
      containerRef.current[0]?.parentElement?.getBoundingClientRect();

    // Get preview dimensions
    const previewHeight = previewRef.current?.offsetHeight || 400;

    // Calculate desired Y position (align with the hovered element)
    let targetY = hoveredRect.top - (containerRect?.top || 0);

    // Adjust so the preview is centered vertically relative to the hovered element
    const hoveredHeight = hoveredRect.height;
    targetY = targetY + hoveredHeight / 2 - previewHeight / 2;

    // Get container height for bounds checking
    const containerHeight = containerRect?.height || 0;

    // Bound checks - prevent going out of container
    if (targetY < 0) {
      targetY = 0;
    }

    const maxY = containerHeight - previewHeight;
    if (targetY > maxY) {
      targetY = maxY;
    }

    // Animate to the calculated position
    gsap.to(previewRef.current, {
      y: targetY,
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentProgram(null);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);

    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.1,
      ease: "power2.out",
    });

    gsap.to(previewRef.current, {
      y: 0,
      opacity: 0,
      scale: 0.99,
      duration: 0.3,
      //   ease: "power2.in",
    });
  };

  return (
    <div id="container" className="mt-12 relative flex flex-col font-light">
      {/* TIER */}
      {programas.map((tier) => (
        <div key={tier.id}>
          {/* TIER NAME */}
          <div className="md:mx-10 my-10  flex-center gap-2 md:justify-start">
            <h3 className="text-lg lg:text-2xl font-light italic uppercase">
              {tier.name}
            </h3>
            <span className="text-2xl font-black md:text-base text-MonoRed">
              {tier.nameJap}
            </span>
          </div>

          {tier.programs.map((program) => (
            <div
              key={program.id}
              ref={(el) => (containerRef.current[program.id] = el)}
              className="relative flex justify-center flex-col cursor-pointer"
              onMouseEnter={(e) => handleMouseEnter(program, e, program.id)}
              onMouseLeave={() => handleMouseLeave(program.id)}
              onClick={() => handleContainerClick(program.id)}
            >
              {/* FONDO */}
              <div
                ref={(el) => {
                  overlayRefs.current[program.id] = el;
                }}
                className="absolute hidden md:block inset-0 w-full bg-MonoRed -z-10 clip-path duration-200"
              />

              <div
                className="group my-4 pt-3 md:p-0 rounded-2xl overflow-hidden"
                style={{
                  backgroundColor:
                    window.innerWidth < 768 && expandIndex === program.id
                      ? "#ec0000"
                      : "transparent",
                  overflow:
                    window.innerWidth < 768 && expandIndex === program.id
                      ? "hidden"
                      : "visible",
                  color:
                    window.innerWidth < 768 && expandIndex === program.id
                      ? "#FAFAFA"
                      : "#040404",
                }}
              >
                <div className="h-full">
                  {/* NOMBRE */}
                  <div className="px-2 md:px-0 grid grid-cols-4 items-center | md:flex">
                    <span className="col-span-3 text-[28px] lg:text-[42px] 2xl:text-[75px] font-normal tracking-tighter uppercase programas-group-hover">
                      {program.name}
                    </span>
                    <span className="md:hidden justify-self-center text-sm opacity-80">
                      {program.category}
                    </span>
                  </div>

                  {/* LINEA */}
                  <div className="h-0.5 mt-2 w-full bg-secundary/60 group-hover:bg-primary duration-200" />
                  {/* OBJETIVO */}
                  <p className="hidden md:block mt-1 text-[14px] md:text-[15px] xl:text-base 2xl:text-[20px] text-secundary/75 programas-group-hover">
                    {program.objective}
                  </p>
                  {/* IMAGEN MOB */}
                  <div
                    ref={(el) => (imageRefs.current[program.id] = el)}
                    className="relative overflow-hidden justify-center items-center md:hidden"
                    style={{
                      height: 0,
                      opacity: 0,
                      display: "none",
                    }}
                  >
                    <img
                      src={program.image}
                      alt={`${program.name}-image`}
                      className="w-full h-full object-cover brightness-60"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="p-3 absolute bottom-10 w-[80%] text-sm text-justify text-white/90 bg-white/10 rounded-[12px] backdrop-blur-xs border border-white/10">
                      {program.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      {/* IMAGEN DESKTOP */}
      <div
        ref={previewRef}
        className="absolute md:right-3 xl:right-8 2xl:right-10 overflow-hidden pointer-events-none shadow-3xl md:h-80 md:w-60 lg:h-90 lg:w-68 xl:h-100 xl:w-75 2xl:h-150 2xl:w-md opacity-0 hidden md:block"
      >
        {currentProgram !== null && (
          <img
            src={currentProgram.image}
            alt="Preview"
            className="object-cover w-full h-full brightness-80"
            loading="lazy"
            decoding="async"
          />
        )}
        {currentProgram !== null && (
          <div className="m-10 absolute inset-0 bg-transparent">
            <div className="h-full flex items-end">
              <p className="p-2 xl:p-3 2xl:p-4 md:text-[12px] xl:text-[14px] 2xl:text-lg text-justify text-primary bg-primary/10 backdrop-blur-sm border border-primary/10">
                {currentProgram.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramasTiers;
