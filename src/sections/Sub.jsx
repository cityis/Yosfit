import React from "react";
import VerticalHeader from "../components/VerticalHeader";
import ContactForm from "../components/ContactFrom";

const Sub = () => {
  const textHeader = "Empieza hoy";
  const textPara = "";
  const textRed = "";

  return (
    <section
      id="sub"
      className="mt-30 w-screen min-h-screen common-padding flex-center text-primary bg-secundary overflow-hidden sub-bg"
    >
      <div className="h-full flex-center flex-col gap-12">
        <h2 className="z-50 header-big-h1-responsive text-primary text-center font-bold italic uppercase tracking-wide">
          Comienza hoy
        </h2>

        <div className="p-4 bg-secundary/10 backdrop-blur-[2px]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Sub;
