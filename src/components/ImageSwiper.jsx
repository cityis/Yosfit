import { imgSlides } from "../constants";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ImageSwiper = () => {
  const swiperRef = useRef(null);

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
      ease: "circ.out",
    });
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      modules={[Pagination, Autoplay]}
      className="pb-19!"
      spaceBetween={50}
      slidesPerView={1}
      speed={800}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
      //   onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      {imgSlides.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <img
            className="imgCarousel-container  bg-zinc-900 border border-white/5 object-cover"
            src={slide.image}
            alt={`Slide ${index + 1}`}
            loading="lazy"
            decoding="async"
          />
          <p className="mt-3 xl:mt-6 px-2 w-full md:w-4/5 text-sm sm:text-[15px] md:text-lg xl:text-xl text-neutral-400 font-light leading-relaxed">
            {slide.text}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
