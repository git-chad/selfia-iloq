
import { Brain } from "lucide-react";
import React from "react";
import { ABOUT_IMAGES } from "../../../utils/constants";


const About: React.FC = () => {
    return (
        <section className="grid grid-cols-12 gap-5 py-32 min-h-svh">
            <div className="col-start-4 col-span-6 text-center place-content-center space-y-2">
                <div className="flex w-max items-center bg-radial-custom rounded-full py-2 px-4 shadow-md border-white border-2 space-x-2 col-span-2 mx-auto mb-6">
                    <Brain size={20}  strokeWidth={1}/>
                    <small className="text-black text-sm">Trade experts</small>
                </div>
                <h1 className="text-6xl font-bold ">Quienes somos?</h1>
                <p className=" text-lg">En Sevilla, expandimos nuestro mercado y nos hicimos partners oficiales de iLOQ. Contamos con 20 años de experiencia en el rubro y etc.</p>
            </div>
            <div className="col-span-12 flex justify-center space-x-5 mt-5">
                <button className=" rounded-xl px-8 shadow-md border-white border-2 font-bold bg-gradient-to-r from-transparent to-selfia-green/20">Contactanos</button>
            </div>
            <div className="col-span-12 grid mt-5">
                <div className="flex w-full gap-2 justify-center">
                    {ABOUT_IMAGES.map((image, index) => (
                        <div key={index}>
                            <img src={image.src} alt="about" className={`rounded-lg w-full ${image.isOffset ? "translate-y-4" : ""}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;