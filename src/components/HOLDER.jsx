   <div>
        {/* <div className="flex justify-center gap-2 md:justify-start">
          <h3 className="md:ml-1 mb-3 text-lg lg:text-2xl font-light italic uppercase">
            {currentTier.name}
          </h3>
          <span className="text-xs text-MonoRed">{currentTier.nameJap}</span>
        </div> */}

        {programData[tier].map((programa, index) => (
          <div
            key={programa.id}
            ref={(el) => (containerRef.current[index] = el)}
            className="relative flex flex-col cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleContainerClick(index)}
          >
            {/* FONDO */}

            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute md:w-3/5 lg:w-7/11 2xl:w-[66%] inset-0 hidden md:block duration-200 bg-MonoRed -z-10 clip-path"
            />
            {/* CONTENT */}
            <div
              className="group py-5"
              style={{
                backgroundColor:
                  window.innerWidth < 768 && expandIndex === index
                    ? "#ec0000"
                    : "transparent",
              }}
            >
              <div className="w-full flex justify-between">
                <span className="text-3xl lg:text-[42px] 2xl:text-[75px] leading-none text-secundary font-normal uppercase tracking-[-0.055em] programas-group-hover">
                  {programa.name}
                </span>
              </div>

              <div className="h-px w-full md:w-3/5 lg:w-7/11 2xl:w-[66%] bg-secundary group-hover:bg-MonoRed programas-group-hover" />

              <p className="md:w-3/5 2xl:w-full pt-3 text-[14px] md:text-[15px] xl:text-base 2xl:text-lg leading-0 text-secundary/70 programas-group-hover">
                {programa.objective}
              </p>
            </div>

            {/* IMAGE */}
            <div
              ref={(el) => (imageRefs.current[index] = el)}
              className="relative overflow-hidden justify-center items-center md:hidden"
              style={{
                height: 0,
                opacity: 0,
                display: "none",
              }}
            >
              <img
                src={programa.image}
                alt={`${programData.name}-image`}
                className="w-full h-full object-cover brightness-60"
                loading="lazy"
                decoding="async"
              />
              <div className="p-3 absolute bottom-10 w-[80%] text-sm text-justify text-white/90 bg-white/10 backdrop-blur-xs border border-white/10">
                {programa.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP FLOATING CARD */}
      <div
        ref={previewRef}
        className="absolute md:right-3 xl:right-8 2xl:right-10 overflow-hidden pointer-events-none shadow-3xl md:h-80 md:w-60 lg:h-90 lg:w-68 xl:h-100 xl:w-75 2xl:h-150 2xl:w-md opacity-0 hidden md:block"
      >
        {currentIndex !== null && (
          <img
            src={programData[tier][currentIndex].image}
            alt="Preview"
            className="object-cover w-full h-full brightness-80"
            loading="lazy"
            decoding="async"
          />
        )}
        {currentIndex !== null && (
          <div className="m-10 absolute inset-0 bg-transparent">
            <div className="h-full flex items-end">
              <p className="p-2 xl:p-3 2xl:p-4 md:text-[12px] xl:text-[14px] 2xl:text-lg text-justify text-white bg-white/10 backdrop-blur-sm border border-white/10">
                {programData[tier][currentIndex].description}
              </p>
            </div>
          </div>
          // <div className="p-2 xl:p-3 2xl:p-4 absolute left-6 bottom-9 xl:left-7 2xl:left-11 2xl:bottom-15 w-[80%] md:text-[12px] xl:text-[14px] 2xl:text-lg text-justify text-white bg-white/10 backdrop-blur-sm border border-white/10 ">
          //   {programData[tier][currentIndex].description}
          // </div>
        )}
      </div>