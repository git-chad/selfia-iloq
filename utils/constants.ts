import hero1 from "../public/images/hero-1.jpg";
import hero2 from "../public/images/hero-2.jpg";
import hero3 from "../public/images/hero-3.jpg";
import hero4 from "../public/images/hero-4.jpg";

export const HERO_IMAGES_BASE = [hero1.src, hero2.src, hero3.src, hero4.src];

export const HERO_IMAGES = [
  {
    src: HERO_IMAGES_BASE[0],
    isOffset: false,
  },
  {
    src: HERO_IMAGES_BASE[1],
    isOffset: false,
  },
  {
    src: HERO_IMAGES_BASE[2],
    isOffset: true,
  },
  {
    src: HERO_IMAGES_BASE[3],
    isOffset: false,
  },
];
