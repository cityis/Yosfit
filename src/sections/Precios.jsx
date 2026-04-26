import React from "react";
import HorizontalHeader from "../components/HorizontalHeader";

const Precios = () => {
  const textHeader = "Coaching";
  const textPara = "Empieza hoy mismo con las ofertas que tenemos";
  const textRed = "disponibles";

  return (
    <section
      id="coaching"
      className="w-screen h-full common-padding overflow-hidden"
    >
      <HorizontalHeader
        h2Text={textHeader}
        pText={textPara}
        spanText={textRed}
      />
    </section>
  );
};

export default Precios;
