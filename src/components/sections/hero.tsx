import { useEffect } from "react";
import HeroImages from "../other/hero-images";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const h1 = ["Selfia, soluciones innovadoras", "para empresas exigentes."];
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 1,
        ease: [0.785, 0.125, 0.15, 0.86],
      },
    }));
  }, [controls]);

  return (
    <section className="grid grid-cols-12 gap-5">
      <div className="col-span-12 md:col-span-11 font-bold text-6xl md:text-6xl leading-none tracking-tighter flex flex-col">
        {h1.map((text, index) => (
          <div className="relative overflow-clip" key={index}>
            <motion.span
              initial={{ y: 128 }}
              animate={controls}
              custom={index}
              className="block"
            >
              {text}
            </motion.span>
          </div>
        ))}
      </div>
      
      <p className="col-start-1 col-span-12 md:col-span-5 mt-12 animate-fade-in text-lg">
        Empresa líder en tecnología con un enfoque transformador. Nos
        enorgullece ofrecer soluciones que redefinen el panorama operativo,
        mejoran la experiencia del usuario y potencian la estrategia comerciales
        de nuestros clientes
      </p>
      <div className="col-span-7 hidden sm:block" />
      <div className="col-span-12 hidden md:block">
        <HeroImages />
      </div>
      <img
        src="/images/hero-1.jpg"
        className="col-span-12 w-full object-cover animate-fade-in block sm:hidden py-6"
      />
    </section>
  );
};

export default Hero;
