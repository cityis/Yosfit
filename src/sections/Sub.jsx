import React from "react";
import VerticalHeader from "../components/VerticalHeader";
import ContactForm from "../components/ContactFrom";

const Sub = () => {
  const textHeader = "¡Empieza hoy!";
  const textPara = "";
  const textRed = "";

  return (
    <section
      id="sub"
      className="w-screen h-full common-padding px-0 overflow-hidden sub-bg"
    >
      <div className="h-full flex-center flex-col">
        <VerticalHeader
          h2Text={textHeader}
          pHidden={true}
          black={true}
          big={true}
        />

        <div className="p-4 bg-primary/10 backdrop-blur-[2px]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Sub;
