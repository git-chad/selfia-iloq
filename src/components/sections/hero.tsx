import { useEffect } from "react";
import HeroImages from "../other/hero-images";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const h1 = ["Selfia te", "acerca iLOQ"];
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
      <div className="col-span-7 font-bold text-8xl leading-none tracking-tighter flex flex-col">
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
      <div className="col-span-5" />
      <p className="col-span-5 mt-6 animate-fade-in">
        En Selfia, expandimos nuestro mercado y nos hicimos partners oficiales
        de iLOQ. Contamos con 20 años de experiencia en el rubro y etc.
      </p>
      <div className="col-span-7" />
      <HeroImages />
    </section>
  );
};

export default Hero;
