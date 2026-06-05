import { socials } from "../constants";

import React from "react";

import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer
      id="contacto"
      className="w-screen h-full text-primary bg-secundary overflow-hidden | xl:h-[50vh]"
    >
      {/* DESKTOP FOOTER */}
      <div className="hidden h-full xl:grid grid-cols-9">
        <div className="col-span-2">
          <div className="h-full flex-center flex-col gap-8 border-r border-primary/25">
            <div className="flex-center">
              <h4 className="text-[70px] text-MonoRed font-bold italic tracking-wide uppercase | 2xl:text-[82px]">
                YosFit
              </h4>
            </div>

            <div className="text-primary/50 text-center">
              <p>© 2026 YosFit</p>
              <p>Todos los derechos reservados</p>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <div className="h-full flex flex-col border-r border-primary/25">
            <div className="h-1/4 flex items-center justify-evenly uppercase border-b border-primary/25">
              {["highlights", "programas", "coaching"].map((section, index) => (
                <Link
                  className={`w-1/3 h-1/4 flex-center ${section === "programas" ? "border-l border-r border-primary/25" : ""} hover:text-MonoRed transition-all ease-in-out duration-150 cursor-pointer`}
                  to={`${section}`}
                  smooth
                  offset={0}
                  duration={1500}
                >
                  {section}
                </Link>
              ))}
            </div>

            <div className="py-18 h-3/4 flex justify-center items-end">
              <span className="text-4xl text-stone-700 font-bold uppercase | 2xl:text-[46px]">
                Supera tus límites
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="h-full flex flex-col">
            <div className="h-1/4 flex items-center justify-between uppercase border-b border-primary/25">
              <div className="w-full h-full flex items-center justify-evenly">
                {socials.map((social, id) => (
                  <a
                    className={`w-1/3 h-1/4 flex-center ${social.name === "Instagram" ? "border-l border-r border-primary/25" : ""} hover:opacity-75 duration-150 transition-all ease-in-out`}
                    key={id}
                    href={social.href}
                  >
                    {social.name}
                  </a>
                ))}
                {/* <a
                  href=""
                  className="hover:opacity-75 duration-150 transition-all ease-in-out"
                >
                  TikTok
                </a>
                <div className="w-px h-1/4 bg-primary/25" />
                <a
                  href=""
                  className="hover:opacity-75 duration-150 transition-all ease-in-out"
                >
                  Instagram
                </a>
                <div className="w-px h-1/4 bg-primary/25" />
                <a
                  href=""
                  className="hover:opacity-75 duration-150 transition-all ease-in-out"
                >
                  Facebook
                </a> */}
              </div>

              <div className="w-1/4 h-full bg-MonoRed hover:saturate-80">
                <Link
                  href=""
                  className="h-full w-full flex-center text-6xl"
                  to="inicio"
                  smooth
                  offset={0}
                  duration={1000}
                >
                  ↑
                </Link>
              </div>
            </div>

            <div className="py-20 h-3/4 flex items-end justify-around text-primary/50">
              <a href="">Política de Privacidad</a>
              <a href="">Términos y Condiciones</a>
              <a href="">
                Creado por{" "}
                <span className="italic text-lg text-primary/75 tracking-wide">
                  Waldo IV
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FOOTER */}
      <div className="xl:hidden h-full flex flex-col | sm:px-6">
        {/* PHRASE */}
        <div className="px-4 py-8 flex-center">
          <span className="text-[34px] font-bold uppercase | sm:text-[48px] lg:text-[60px]">
            Supera tus límites
          </span>
        </div>

        {/* FOOTER NAV LINKS */}
        <div className="py-6 h-full flex items-center justify-between uppercase border-y border-primary/25 | sm:py-8">
          {["highlights", "programas", "coaching"].map((section, index) => (
            <Link
              className={`w-1/2 flex-center ${section === "programas" ? "border-l border-r border-primary/25" : ""} hover:text-MonoRed transition-all ease-in-out duration-150 cursor-pointer`}
              to={`${section}`}
              smooth
              offset={0}
              duration={1500}
            >
              {section}
            </Link>
          ))}
        </div>

        {/* LOGO & SOCIALS SECTION */}
        <div className="px-3 py-9 h-full grid grid-cols-2">
          <div className="flex items-center">
            <h4 className="text-4xl text-MonoRed font-bold italic tracking-wide uppercase | sm:text-5xl">
              YosFit
            </h4>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex justify-center flex-col gap-6 uppercase">
              <a
                href=""
                className="hover:opacity-75 duration-150 transition-all ease-in-out"
              >
                TikTok
              </a>
              <a
                href=""
                className="hover:opacity-75 duration-150 transition-all ease-in-out"
              >
                Instagram
              </a>
              <a
                href=""
                className="hover:opacity-75 duration-150 transition-all ease-in-out"
              >
                Facebook
              </a>
            </div>

            <div className="p-6 aspect-square bg-MonoRed | sm:p-8">
              <Link
                href=""
                className="h-full w-full flex-center text-4xl"
                to="inicio"
                smooth
                offset={0}
                duration={1000}
              >
                ↑
              </Link>
            </div>
          </div>
        </div>

        {/* LEGAL */}
        <div className="py-6 flex items-center justify-around text-[10px] text-primary/50 | sm:text-sm lg:py-8">
          <a href="">Política de Privacidad</a>
          <a href="">Términos y Condiciones</a>
          <a href="">
            Creado por{" "}
            <span className="italic text-primary/75 tracking-wide">
              Waldo IV
            </span>
          </a>
        </div>

        {/* RESERVED RIGHTS */}
        <div className="py-6 flex-center gap-3 text-[10px] text-primary/50 text-center | sm:text-sm lg:py-8">
          <p>© 2026 YosFit</p>
          <p>Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
