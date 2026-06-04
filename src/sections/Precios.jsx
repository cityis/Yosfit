import React from "react";
import HorizontalHeader from "../components/HorizontalHeader";
import VerticalHeader from "../components/VerticalHeader";

import { coaching } from "../constants";

import { Link } from "react-scroll";

const Precios = () => {
  const textHeader = "Coaching";
  const textPara = "Empieza hoy mismo con las ofertas que tenemos";
  const textRed = "disponibles";

  return (
    <section
      id="coaching"
      className="w-screen h-full common-padding overflow-hidden"
    >
      <VerticalHeader
        h2Text={textHeader}
        pText={textPara}
        spanText={textRed}
        black={true}
        big={true}
      />

      <div className="flex-center flex-col 2xl:px-30">
        <div className="grid grid-cols-1 gap-6 | md:grid-cols-2 xl:grid-cols-3 xl:gap-12">
          {coaching.map((tier) => (
            <div
              id={tier.id}
              className={`h-120 flex justify-between flex-col ${tier.best ? "bg-secundary/90 text-primary border-primary/80" : "bg-secundary/5 text-secundary border-secundary/20"} border rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 | lg:h-140`}
            >
              {/* TITLE */}
              <h3
                className={`mt-8 mx-8 h-[15%] text-2xl font-semibold leadi border-b ${tier.best ? "border-primary/60" : "border-secundary/40"} | lg:text-3xl`}
              >
                {tier.name}
              </h3>
              {/* INFO */}
              <ul className="mt-4 mx-8 h-[70%] text-[16px] opacity-85 | 2xl:text-[18px]">
                <p className="pb-5">{tier.description}</p>
                {tier.info.map((info) => (
                  <li className="my-2">{info}</li>
                ))}
              </ul>
              {/* PRICE & BTN */}
              <div
                className={`h-[15%] grid grid-cols-2 border-t ${tier.best ? "border-primary/60" : "border-secundary/40"}`}
              >
                <div className={`flex-center border-r border-primary/60`}>
                  <span className="text-3xl font-bold">
                    {tier.price}$/<span className="text-base">month</span>
                  </span>
                </div>
                <div
                  className={`flex-center bg-MonoRed text-primary ${tier.best ? "hover:bg-primary hover:text-secundary" : "hover:bg-secundary hover:text-primary"}  cursor-pointer transition-all duration-150`}
                >
                  <Link
                    className="text-2xl tracking-tight font-bold uppercase"
                    smooth
                    to="sub"
                    offset={0}
                    duration={500}
                  >
                    <p>Empezar</p>
                  </Link>
                  {/* <a
                    className="text-2xl tracking-tight font-bold uppercase"
                    href=""
                  >
                    Empezar
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Precios;
