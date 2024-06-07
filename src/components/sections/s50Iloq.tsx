import React from "react";

const S50Iloq: React.FC = () => {
  return (
    <section className="grid md:grid-cols-12 gap-5 py-24">
      <a className="md:hidden items-center bg-radial-custom-blue rounded-full py-2 px-8 w-max shadow-md border-white border-2 mb-8 " href="https://www.iloq.com/es/productos/iloq-s50-es/" target="_blank">
        <span className="text-black text-sm font-semibold leading-none ">
          iLOQ S50
        </span>
      </a>
      <h1 className="md:col-span-6 text-start font-semibold text-5xl md:text-[4rem] leading-none tracking-tighter md:mb-28">
        Autoalimentadas. Sin baterías, ni cables.
      </h1>
      <img
        src="images/s50IloqPic/image 26.png"
        alt="s50Iloq"
        className={`rounded-lg w-full md:col-span-6 md:col-start-1 order-last md:order-none`}
      ></img>
      <div className="fles flex-col h-full justify-between md:col-span-5 md:col-start-8 my-8 md:my-0">
        <a className="hidden md:block items-center bg-radial-custom rounded-full col-span-2 py-2 px-8 w-max shadow-md border-white border-2 mb-8 hover:scale-105 transition-all" href="https://www.iloq.com/es/productos/iloq-s50-es/" target="_blank" >
          <span className="text-black text-sm font-semibold leading-none ">
            iLOQ S50
          </span>
        </a>
        <p className="mb-4 text-lg">
          <b>iLOQ S50</b> es el la primera cerradura autoalimentada NFC del
          mundo que genera su propia energía mediante un teléfono inteligente.
        </p>
        <p className="text-lg">
          Utiliza la tecnología NFC al máximo acumulando energía para los
          cilindros de apertura mediante de un smartphone. iLOQ S50 funciona a
          través de una aplicación para móvil que aúna varias plataformas de
          manera cómoda en una sola plataforma intuitiva.
        </p>
      </div>
    </section>
  );
};

export default S50Iloq;
