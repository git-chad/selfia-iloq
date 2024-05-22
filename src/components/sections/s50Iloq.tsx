import React from "react";

const S50Iloq: React.FC = () => {
    return (
        <section className="grid grid-cols-12 gap-5 py-24">

            <h1 className=" col-span-6 text-start font-semibold text-[4rem] leading-none tracking-tighter mb-28">Autoalimentadas. Sin baterías, ni cables.</h1>

            <img src="images/s50IloqPic/image 26.png" alt="s50Iloq" className={`rounded-lg w-full col-span-6 col-start-1`}></img>
            <div className="fles flex-col h-full justify-between col-span-5 col-start-8 ">
                <div className=" items-center bg-radial-custom rounded-full col-span-2 py-2 px-8 w-max shadow-md border-white border-2 mb-8">
                    <span className="text-black text-sm font-semibold leading-none ">iLOQ 50 Series</span>
                </div>
                <p className="mb-4">
                    <b>iLOQ S50</b> es el la primera cerradura autoalimentada NFC del mundo que genera su propia energía mediante un teléfono inteligente.
                </p>
                <p>
                    Utiliza la tecnología NFC al máximo acumulando energía para los cilindros de apertura mediante de un smartphone.
                    iLOQ S50 funciona a través de una aplicación para móvil que aúna varias plataformas de manera cómoda en una sola plataforma intuitiva.
                </p>
            </div>
        </section>
    )
}

export default S50Iloq;