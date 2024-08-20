import { useRef, useEffect } from "react";
import { HERO_IMAGES } from "../../../utils/constants";
import { motion, useAnimation } from "framer-motion";

const HeroImages = () => {
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start((i) => ({
        height: "0%",
        transition: {
          delay: i * 0.05,
          duration: 1,
          ease: [0.785, 0.125, 0.15, 0.86],
        },
      }));
    }, 800);

    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <div className="relative grid grid-cols-12 gap-3 mt-24">
      {HERO_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`relative col-span-3 overflow-clip ${
            image.isOffset ? "translate-y-[-50%]" : ""
          }`}
        >
          <motion.div
            initial={{ height: "100%" }}
            animate={controls}
            custom={index}
            className={`z-10 absolute left-0 top-0 w-full h-[100%] bg-faded-white`}
          />
          <img
            className={`p-px w-full rounded-xl object-cover aspect-square`}
            src={image.src}
            alt={`Sobre nuestros kioskos y cerraduras iLOQ.`}
          />
        </div>
      ))}

      <span className="absolute right-0 -translate-y-full font-semibold text-lg animate-fade-in p-2">
        Partner oficial de <img src="/logos/logo-iloq-black.png" alt="iLOQ Logo" className="inline-block w-auto h-5" />
      </span>
    </div>
  );
};

export default HeroImages;
