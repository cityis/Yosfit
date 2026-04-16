import ImageSwiper from "../components/ImageSwiper";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Highlights = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#highlights",
        start: "top 60%"
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
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen h-full common-padding bg-black"
    >
      <div className="w-full screen-max-width">
        <div
          style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}
          className="mb-12 sm:mb-17 w-full flex flex-col justify-center items-center gap-3 sm:gap-5"
          // className="mb-8 w-full xl:flex items-end justify-between"
        >
          <h2
            ref={titleRef}
            className="highlights-h1-responsive text-white/90 uppercase font-medium text-center tracking-wider"
          >
            Experimenta <br />
            tu transformacion
          </h2>
          <p
            ref={subTitleRef}
            className="self-center text-xl md:text-3xl text-neutral-400 font-light | lg:py-4"
          >
            Paso a paso, cumple tus <span className="text-MonoRed">metas</span>
          </p>
        </div>

        <ImageSwiper />
      </div>
    </section>
  );
};

export default Highlights;
