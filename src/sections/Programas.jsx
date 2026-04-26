import { programas } from "../constants";
import HorizontalHeader from "../components/HorizontalHeader";
import ProgramasTiers from "../components/ProgramasTiers";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Programas = () => {
  const programData = programas[0];
  const textHeader = "Programas";
  const textPara =
    "Aprende a hacer ejercicio con la fomra adecuada mediante diferentes programas";
  const textRed = "especializados";

  return (
    <section
      id="programas"
      className="w-screen h-full common-padding overflow-hidden"
    >
      <div className="w-full">
        <HorizontalHeader
          scrollTrig="#programas"
          h2Text={textHeader}
          pText={textPara}
          spanText={textRed}
        />

        <ProgramasTiers scrollTrig={"#programas"} />
      </div>
    </section>
  );
};

export default Programas;
