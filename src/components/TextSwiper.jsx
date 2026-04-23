import { textSlides } from "../constants";

import { PiQuotesFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TextSwiper = () => {
  const swiperRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: swiperRef.current,
        start: "top bottom",
      },
    });
    tl.from(swiperRef.current, {
      y: "50vh",
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      stagger: 0.33,
      ease: "circ.out",
    });
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      modules={[Pagination, Autoplay]}
      className="pt-5! px-12! pb-25! -mx-5! sm:-mx-10!"
      slidesPerView={1}
      spaceBetween={35}
      breakpoints={{
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      speed={1000}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 5500, pauseOnMouseEnter: true }}
    >
      {textSlides.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <div
            key={index}
            className="h-full p-8 flex-center bg-primary/10 border border-white/5"
          >
            <div className="absolute right-10 -top-5 h-12 w-12 md:h-12 md:w-12 rounded-full text-xl flex-center text-primary bg-primary/10 z-10">
              <PiQuotesFill />
            </div>
            <div key={index} className="h-full flex flex-col gap-5">
              <div className="flex items-center gap-1">
                {Array.from({ length: slide.rating }, (_, i) => (
                  <FaStar className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <div className="h-full flex flex-col gap-3 justify-between!">
                <p className="reviews-p-responsive font-light text-justify text-primary/80">
                  {slide.text}
                </p>
                <span className="reviews-p-responsive font-semibold text-primary/90">
                  {slide.user}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TextSwiper;
