import TextSwiper from "../components/TextSwiper";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Reviews = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#reviews",
        start: "top 80%",
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
      id="reviews"
      className="w-screen h-full common-padding pt-0 overflow-hidden bg-black"
    >
      <div className="w-full screen-max-width">
        <div
          style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}
          className="mb-9 sm:mb-15 w-full flex flex-col justify-center items-center gap-3 sm:gap-5"
          // className="mb-8 w-full xl:flex items-end justify-between"
        >
          <h1
            ref={titleRef}
            className="highlights-h1-responsive text-white/90 uppercase font-medium text-center"
          >
            Clientes <br />
            satisfechos
          </h1>
          <p
            ref={subTitleRef}
            className="self-center text-xl md:text-3xl text-neutral-400 font-light text-center | lg:py-4"
          >
            Experiencias <span className="text-MonoRed">reales</span>, sueños
            hechos realidad.
          </p>
        </div>
      </div>

      <TextSwiper />
    </section>
  );
};

export default Reviews;
