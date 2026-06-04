import { socials } from "../constants";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

  // GSAP ANIMATIONS: INIT SETTINGS
  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    // GSAP ANIMATIONS: NAVBAR TIMELINE
    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<",
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2",
      );

    // GSAP MENU BUTTON ANIMATION
    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.33,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.33,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<",
      );
  }, []);

  //GSAP EFFECT: DYNAMIC MENU BUTTON
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP TOGGLE MENU FUNCTION
  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  const autoCloseMenu = () => {
    if (isOpen) {
      // Reverse the animations
      tl.current.reverse();
      iconTl.current.reverse();
      setIsOpen(false);
    }
  };

  // HTML CODE
  return (
    <>
      {/* NAV BAR */}
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between w-full h-full | px-10 py-28 uppercase | bg-secundary text-primary/80 gap-y-10 | 2xl:w-1/2 2xl:left-1/2"
      >
        {/* NAV ELEMENTS */}
        <div className="group flex flex-col text-5xl gap-y-2 | md:text-6xl lg:text-8xl">
          {["inicio", "highlights", "programas", "coaching", "contacto"].map(
            (section, index) => (
              <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                <Link
                  className="group-hover:opacity-50 hover:opacity-100! hover:text-MonoRed! transition-all ease-in-out duration-500 cursor-pointer"
                  to={`${section}`}
                  smooth
                  offset={0}
                  duration={2000}
                  onClick={autoCloseMenu}
                >
                  {section}
                </Link>
              </div>
            ),
          )}
        </div>

        {/* CONTACT INFORMATION AND SOCIAL MEDIA*/}
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap px-10 justify-between gap-8 | md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-primary/50">E-mail</p>
            <p className="text-xl tracking-widest lowercase text-pretty">
              Yosdiel@gmail.com
            </p>
          </div>

          <div className="font-light">
            <p className="tracking-wider text-primary/50">Social Media</p>
            <div className="flex flex-col flex-wrap | md:flex-row gap-x-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-sm leading-loose tracking-widest uppercase cursor-pointer | hover:text-primary transition-colors duration-300"
                >
                  {"["} {social.name} {"]"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* BURGER ICON BUTTON */}
      <div
        className="fixed top-5 right-10 z-50 flex-center flex-col gap-1 w-13 h-13 | transition-all duration-300 bg-secundary rounded-full cursor-pointer | md:w-18 md:h-18 md:top-10"
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span
          ref={topLineRef}
          className="block w-8 h-0.5 bg-primary rounded-full origin-center"
        ></span>
        <span
          ref={bottomLineRef}
          className="block w-8 h-0.5 bg-primary rounded-full origin-center"
        ></span>
      </div>
    </>
  );
};

export default Navbar;
