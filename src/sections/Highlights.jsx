import VerticalHeader from "../components/VerticalHeader";
import ImageSwiper from "../components/ImageSwiper";

const Highlights = () => {
  const textHeader = "Transforma tu cuerpo";
  const textPara = "Paso a paso, cumple tus";
  const textRed = "metas";

  return (
    <section
      id="highlights"
      className="w-screen h-full common-padding bg-secundary"
    >
      <div className="w-full screen-max-width">
        <VerticalHeader
          scrollTrig="#highlights"
          h2Text={textHeader}
          pText={textPara}
          spanText={textRed}
        />

        <ImageSwiper />
      </div>
    </section>
  );
};

export default Highlights;
