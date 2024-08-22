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
    <section className="min-h-svh gap-5 flex flex-col items-start justify-center pt-48 md:pt-16 xl:pt-32 2xl:pt-0">
      <div className="col-span-12 md:col-span-10 text-4xl md:text-6xl flex flex-col">
        {h1.map((text, index) => (
          <div className="relative overflow-clip font-bold leading-none tracking-tighter" key={index}>
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
        <p className="md:w-[50ch] animate-fade-in text-lg text-balance pt-8">
          Empresa líder en tecnología con un enfoque transformador. Nos
          enorgullece ofrecer soluciones que redefinen el panorama operativo,
          mejoran la experiencia del usuario y potencian la estrategia
          comerciales de nuestros clientes
        </p>
      </div>

      <div className="col-span-12 col-start-1 hidden md:block">
        <HeroImages />
      </div>
      <div className="col-span-12 w-full animate-fade-in block sm:hidden rounded-xl overflow-clip pt-6">
        <img
          src="/images/hero-1.jpg"
          className="w-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
