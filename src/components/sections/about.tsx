import { useEffect, useState } from "react";
import { Brain } from "lucide-react";
import React from "react";
import { ABOUT_IMAGES } from "../../../utils/constants";

const About: React.FC = () => {
  const [images, setImages] = useState(ABOUT_IMAGES);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImages(ABOUT_IMAGES.slice(0, 3));
      } else {
        setImages(ABOUT_IMAGES);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative grid md:grid-cols-12 md:gap-5 py-32 md:min-h-svh"
    >
      <div className="md:col-start-4 md:col-span-6 text-center md:place-content-center space-y-2">
        <div className="flex w-max items-center bg-radial-custom rounded-xl md:rounded-full py-px md:py-1 md:px-4 px-2 shadow-md border-white border-2 space-x-2 col-span-2 mx-auto mb-6">
          <Brain size={20} strokeWidth={1} />
          <small className="text-black text-md">Trade experts</small>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none">
          Quiénes somos?
        </h1>
      </div>
      <p className="md:col-start-2 md:col-span-10 md:text-lg text-lg pt-8 text-center">
          Posicionados en Argentina y el Mercosur en soluciones de autoservicio
          para Retail, Gaming y Banca, llegamos a Colombia para traer lo último
          en tecnología de kioscos de autoservicio. Además, como distribuidores
          oficiales de la reconocida marca iLOQ, presentamos los sistemas de
          cierre inteligentes sin cables ni baterías que mejoran la eficiencia y
          la seguridad en todo tipo de accesos. Por todo ello, estamos
          comprometidos en ofrecerles atención personalizada, servicios
          eficientes y soluciones innovadoras que mejoren la operación de
          nuestros Clientes.
        </p>
      <div className="md:col-span-12 md:grid md:mt-5">
        <div className="flex w-full gap-1 md:gap-2 justify-center">
          {images.map((image, index) => (
            <div key={index} className="max-w-[226px] max-h-[306px]">
              <img
                src={image.src}
                alt="Clientes junto a nuestro productos."
                className={`rounded-lg w-full object-cover h-full ${
                  image.isOffset ? "translate-y-4" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
