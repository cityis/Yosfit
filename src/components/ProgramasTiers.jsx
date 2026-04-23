import { programas } from "../constants";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ProgramasTiers = ({ tier }) => {
  const programData = programas[0];

  const containerRef = useRef([]);
  const previewRef = useRef(null);
  const overlayRefs = useRef([]);
  const imageRefs = useRef([]);
  const [currentIndex, setcurrentIndex] = useState(null);
  const [expandIndex, setExpandIndex] = useState(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      y: 100,
      opacity: 0,
      delay: 0.2,
      duration: 3,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#container",
      },
    });
  }, [tier, programData]);

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

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setcurrentIndex(index);

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

    let itemHeight = 35;
    if (window.innerWidth < 1536) {
      itemHeight = 70;
    }

    let yOffset = index * itemHeight;

    // Get container and preview dimensions
    const container = previewRef.current?.parentElement;
    const previewHeight = previewRef.current?.offsetHeight || 600;

    if (container) {
      const containerRect = container.getBoundingClientRect();
      const maxAllowedY = containerRect.height - previewHeight;

      // If the image would go out of bounds, adjust it
      if (yOffset > maxAllowedY) {
        yOffset = maxAllowedY;
      }

      // Optional: Add a small offset from bottom if needed
      if (yOffset < 0) yOffset = 0;
    }

    gsap.to(previewRef.current, {
      y: yOffset,
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setcurrentIndex(null);

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

  const tierDisplayNames = {
    principiante: { name: "Principiante", nameJap: "初心者" },
    intermedio: { name: "Intermedio", nameJap: "中級" },
    avanzado: { name: "Avanzado", nameJap: "上級" },
  };

  const currentTier = tierDisplayNames[tier] || { name: tier, nameJap: "" };

  return (
    <div id="container" className="mt-12 relative flex flex-col font-light">
      {/* TIER */}
      <div>
        <div className="flex justify-center gap-2 md:justify-start">
          <h3 className="ml-10 mb-3 text-lg lg:text-2xl font-light italic uppercase">
            {currentTier.name}
          </h3>
          <span className="text-xs text-MonoRed">{currentTier.nameJap}</span>
        </div>

        {programData[tier].map((programa, index) => (
          <div
            key={programa.id}
            ref={(el) => (containerRef.current[index] = el)}
            className="relative flex flex-col cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleContainerClick(index)}
          >
            {/* FONDO */}

            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute md:w-3/5 lg:w-7/11 2xl:w-[66%] inset-0 hidden md:block duration-200 bg-MonoRed -z-10 clip-path"
            />
            {/* CONTENT */}
            <div
              className="group py-5"
              style={{
                backgroundColor:
                  window.innerWidth < 768 && expandIndex === index
                    ? "#ee0000"
                    : "transparent",
              }}
            >
              <span className="px-2 2xl:px-5 text-3xl lg:text-[42px] 2xl:text-[60px] leading-none text-black font-normal programas-group-hover">
                {programa.name}
              </span>
              <div className="my-3 h-[1.5px] w-full md:w-3/5 lg:w-7/11 2xl:w-[66%] bg-black group-hover:bg-zinc-50 programas-group-hover" />

              <p className="md:w-3/5 2xl:w-full px-2 2xl:px-5 text-[14px] md:text-[15px] xl:text-base 2xl:text-lg leading-4 programas-group-hover">
                {programa.objective}
              </p>
            </div>

            {/* IMAGE */}
            <div
              ref={(el) => (imageRefs.current[index] = el)}
              className="relative overflow-hidden justify-center items-center md:hidden"
              style={{
                height: 0,
                opacity: 0,
                display: "none",
              }}
            >
              <img
                src={programa.image}
                alt={`${programData.name}-image`}
                className="w-full h-full object-cover brightness-60"
                loading="lazy"
                decoding="async"
              />
              <div className="p-3 absolute bottom-10 w-[80%] text-sm text-justify text-white/90 bg-white/10 backdrop-blur-xs border border-white/10">
                {programa.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP FLOATING CARD */}
      <div
        ref={previewRef}
        className="absolute md:right-3 xl:right-8 2xl:right-10 overflow-hidden pointer-events-none shadow-3xl md:h-80 md:w-60 lg:h-90 lg:w-68 xl:h-100 xl:w-75 2xl:h-150 2xl:w-md opacity-0 hidden md:block"
      >
        {currentIndex !== null && (
          <img
            src={programData[tier][currentIndex].image}
            alt="Preview"
            className="object-cover w-full h-full brightness-80"
            loading="lazy"
            decoding="async"
          />
        )}
        {currentIndex !== null && (
          <div className="m-10 absolute inset-0 bg-transparent">
            <div className="h-full flex items-end">
              <p className="p-2 xl:p-3 2xl:p-4 md:text-[12px] xl:text-[14px] 2xl:text-lg text-justify text-white bg-white/10 backdrop-blur-sm border border-white/10">
                {programData[tier][currentIndex].description}
              </p>
            </div>
          </div>
          // <div className="p-2 xl:p-3 2xl:p-4 absolute left-6 bottom-9 xl:left-7 2xl:left-11 2xl:bottom-15 w-[80%] md:text-[12px] xl:text-[14px] 2xl:text-lg text-justify text-white bg-white/10 backdrop-blur-sm border border-white/10 ">
          //   {programData[tier][currentIndex].description}
          // </div>
        )}
      </div>
    </div>
  );
};

export default ProgramasTiers;
