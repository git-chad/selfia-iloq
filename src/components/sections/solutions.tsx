import React from "react";

const Solutions: React.FC = () => {
  return (
    <section className="grid md:grid-cols-12 gap-5 py-24" id="solutions">
      <div
        className="md:hidden items-center bg-radial-custom-blue rounded-full py-2 px-8 w-max shadow-md border-white border-2 mb-8 "
      >
        <span className="text-black text-sm font-semibold leading-none ">
          Soluciones
        </span>
      </div>

      <img
        src="images/solutionsPic/Web Selfia 2.jpg"
        alt="solutions"
        className={`rounded-lg w-full md:col-span-6 md:col-start-1 order-last md:order-none `}
      ></img>
      <div className="flex flex-col h-full justify-start md:col-span-5 md:col-start-8 my-8 md:my-0 ">
        <div
          className="hidden md:block items-center bg-radial-custom rounded-full col-span-2 py-2 px-8 w-max shadow-md border-white border-2 mb-8 "
        >
          <span className="text-black text-sm font-semibold leading-none ">
            Soluciones
          </span>
        </div>
        <h1 className="md:col-span-6 text-start font-semibold text-5xl md:text-[4rem] leading-none tracking-tighter mb-8 md:mb-28 text-balance">
        Transformación digital en sectores estratégicos
        </h1>

        <div >
          <p className="text-lg text-balance">
            Con Selfia, las empresas lideran la innovación en un mercado
            competitivo. Nuestos kioscos en retail agilizan pagos y optimizan
            inventarios. En banca, automatizamos retiros y consultas, mejorando
            la conveniencia. En gaming, mejoramos la experiencia del jugador y
            el servicio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
