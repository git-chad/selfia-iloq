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
        <section id="about" className="relative grid md:grid-cols-12 md:gap-5 py-32 md:min-h-svh">
            <div className="md:col-start-4 md:col-span-6 text-center md:place-content-center space-y-2">
                <div className="flex w-max items-center bg-radial-custom rounded-xl md:rounded-full py-px md:py-1 md:px-4 px-2 shadow-md border-white border-2 space-x-2 col-span-2 mx-auto mb-6">
                    <Brain size={20} strokeWidth={1}/>
                    <small className="text-black text-xs">Trade experts</small>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none">Quienes somos?</h1>
                <p className="md:text-lg">En Sevilla, expandimos nuestro mercado y nos hicimos partners oficiales de iLOQ. Contamos con 20 años de experiencia en el rubro y etc.</p>
            </div>
            <div className="md:col-span-12 flex justify-center mt-5 mb-16 md:mb-0">
                <button className="rounded-xl h-10 px-8 shadow-md border-white border-2 font-bold bg-gradient-to-r from-transparent to-selfia-green/20">Contactanos</button>
            </div>
            <div className="md:col-span-12 md:grid md:mt-5">
                <div className="flex w-full gap-1 md:gap-2 justify-center">
                    {images.map((image, index) => (
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
