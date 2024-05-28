import React from "react";

const S5Iloq: React.FC = () => {
  return (
    <section id="products" className="grid md:grid-cols-12 gap-5 py-24">
      <div className="flex flex-col col-span-6 items-star justify-between">
        <div>
          <div className=" items-center bg-radial-custom rounded-full w-max py-2 px-8 shadow-md border-white border-2 mb-8">
            <span className="text-black text-sm font-semibold">
              iLOQ 5 Series
            </span>
          </div>
          <h1 className="md:text-[4rem] text-5xl font-bold leading-none md:w-3/5 tracking-tighter ">
            La última palabra en cerraduras electrónicas
          </h1>
        </div>
        <h1 className="md:w-3/4 md:text-lg text-balance my-8 md:my-0">
          La serie iLOQ 5 combina cerraduras electrónicas con llave y apertura
          por móvil, permitiendo usarlas por separado o como sistema híbrido. Es
          completamente escalable y gestionable desde una única plataforma,
          facilitando la seguridad de las instalaciones con menor inversión.
        </h1>
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
