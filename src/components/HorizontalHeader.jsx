import React from "react";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const HorizontalHeader = ({ scrollTrig, h2Text, pText, spanText }) => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollTrig,
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
          duration: 1.5,
          ease: "circ.out",
        },
        "<+0.2",
      )
      .from(
        lineRef.current,
        {
          x: "-100vw",
          duration: 2.5,
          ease: "power2.inOut",
        },
        "<+0.1",
      );
  }, [scrollTrig]);

  return (
    <>
      <div>
        <div className="my-5 px-0 w-full flex-center flex-col | xl:flex-row xl:justify-between">
          <h2
            ref={titleRef}
            className="header-big-h1-responsive leading-0 tracking-tighter"
          >
            {h2Text}
          </h2>

          <p
            ref={subTitleRef}
            className="xl:w-1/5 xl:pr-5 text-base md:text-[21px] lg:text-2xl xl:text-[17px] 2xl:text-[20px] leading-7 text-secundary/70 font-light text-center xl:text-right"
          >
            {"["} {pText} <span className="text-MonoRed">{spanText}</span> {"]"}
          </p>
        </div>
        <div className="mt-15 h-0.5 w-full bg-transparent overflow-hidden">
          <div ref={lineRef} className="bg-secundary h-full w-full" />
        </div>
      </div>
    </>
  );
};

export default HorizontalHeader;
