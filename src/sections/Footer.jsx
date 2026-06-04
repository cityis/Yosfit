import React from "react";

import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer
      id="contacto"
      className="w-screen h-[50vh] text-primary bg-secundary overflow-hidden"
    >
      <div className="h-full grid grid-cols-9 ">
        <div className="col-span-2">
          <div className="h-full flex-center flex-col gap-8 border-r border-primary/25">
            <div className="flex-center">
              <h4 className="text-8xl text-MonoRed font-bold tracking-wider uppercase">
                YosFit
              </h4>
            </div>

            <div className="text-primary/50 text-center">
              <p>@ 2026 YosFit</p>
              <p>Todos los derechos reservados</p>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <div className="h-full flex flex-col border-r border-primary/25">
            <div className="h-1/4 flex items-center justify-evenly uppercase border-b border-primary/25">
              <a href="">Highlights</a>
              <div className="w-px h-1/4 bg-primary/25" />
              <a href="">Programas</a>
              <div className="w-px h-1/4 bg-primary/25" />
              <a href="">Coaching</a>
              <div className="w-px h-1/4 bg-primary/25" />
              <a href="">Contacto</a>
            </div>

            <div className="py-18 h-3/4 flex justify-center items-end">
              <span className="text-7xl font-semibold tracking-tight uppercase">
                Empieza ahora
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="h-full flex flex-col">
            <div className="h-1/4 flex items-center justify-between uppercase border-b border-primary/25">
              <div className="w-full h-full flex items-center justify-evenly">
                <a href="">TikTok</a>
                <div className="w-px h-1/4 bg-primary/25" />
                <a href="">Instagram</a>
                <div className="w-px h-1/4 bg-primary/25" />
                <a href="">Facebook</a>
              </div>

              <div className="w-1/3 h-full bg-MonoRed hover:saturate-90">
                <Link
                  href=""
                  className="h-full w-full flex-center"
                  to="inicio"
                  smooth
                  offset={0}
                  duration={1000}
                >
                  Arrow
                </Link>
              </div>
            </div>

            <div className="py-20 h-3/4 flex items-end justify-around text-primary/50">
              <a href="">Política de Privacidad</a>
              <a href="">Términos y Condiciones</a>
              <a href="">Creado por Waldo IV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
