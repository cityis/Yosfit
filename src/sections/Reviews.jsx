import VerticalHeader from "../components/VerticalHeader";
import TextSwiper from "../components/TextSwiper";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Reviews = () => {
  const textHeader = "Clientes satisfechos";
  const textPara = "Experiencias y sueños hechos";
  const textRed = "realidad";

  return (
    <section
      id="reviews"
      className="w-screen h-full common-padding pt-0 overflow-hidden bg-secundary | md:px-20"
    >
      <div className="w-full screen-max-width">
        <VerticalHeader
          scrollTrig="#reviews"
          h2Text={textHeader}
          pText={textPara}
          spanText={textRed}
        />
      </div>
      <TextSwiper />
    </section>
  );
};

export default Reviews;
