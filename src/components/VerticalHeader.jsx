import React from "react";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export const VerticalHeader = ({ scrollTrig, h2Text, pText, spanText }) => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollTrig,
        start: "top 60%",
      },
    });
    tl.from(titleRef.current, {
      y: "50vh",
      opacity: 0,
      duration: 1.25,
      ease: "circ.out",
    }).from(
      subTitleRef.current,
      {
        y: "50vh",
        opacity: 0,
        duration: 1.25,
        ease: "circ.out",
      },
      "<+0.5",
    );
  }, [scrollTrig]);

  return (
    <div
      style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}
      className="py-2 mb-12 sm:mb-17 h-full w-full flex-center flex-col gap-3 sm:gap-5"
    >
      <h2
        ref={titleRef}
        className="highlights-h1-responsive text-primary text-center font-medium uppercase  tracking-tighter "
      >
        {h2Text}
      </h2>
      <p
        ref={subTitleRef}
        className="text-xl md:text-3xl text-primary/60 font-light | lg:py-4"
      >
        {pText} <span className="text-MonoRed">{spanText}</span>.
      </p>
    </div>
  );
};

export default VerticalHeader;
