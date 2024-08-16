import React from "react";

const S5Iloq: React.FC = () => {
  return (
    <section id="products" className="grid md:grid-cols-12 gap-5 py-24">
      <div className="flex flex-col col-span-6 items-star justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <a
              className=" items-center bg-radial-custom rounded-full w-max py-2 px-8 shadow-md border-white border-2 mb-8 hover:scale-105 transition-all"
              href="https://www.iloq.com/es/productos/iloq-s50-es/"
              target="_blank"
            >
              <span className="text-black text-sm font-semibold">iLOQ S5</span>
            </a>
            <a
              className=" items-center bg-radial-custom-blue rounded-full py-2 px-8 w-max shadow-md border-white border-2 mb-8 hover:scale-105 transition-all"
              href="https://www.iloq.com/es/productos/iloq-s50-es/"
              target="_blank"
            >
              <span className="text-black text-sm font-semibold leading-none ">
                iLOQ S50
              </span>
            </a>
          </div>
          <h1 className="md:text-[4rem] text-5xl font-bold leading-none md:w-3/5 tracking-tighter ">
            Tecnología de vanguardia en cerraduras electrónicas.
          </h1>
        </div>
        <div className="flex flex-col gap-6">
          <p className="md:w-3/4 md:text-lg text-lg text-balance my-8 md:my-0">
            La serie iLOQ 5 ofrece cerraduras electrónicas que combinan llave y
            apertura móvil, permitiendo un sistema independiente o híbrido,
            escalable y gestionable desde una única plataforma.
          </p>
          <p className="md:w-3/4 md:text-lg text-lg text-balance my-8 md:my-0">
            El iLOQ S50, la primera cerradura NFC autoalimentada, genera energía
            desde un smartphone, aprovechando la tecnología para un
            funcionamiento intuitivo a través de una sola aplicación.
          </p>
        </div>
      </div>

      <div className="col-span-6 items-center">
        <img
          src="images/s5IloqPic/image 25.png"
          alt="s5Iloq"
          className={`rounded-lg w-full`}
        />
      </div>
    </section>
  );
};

export default S5Iloq;
