import hero1 from "../public/images/hero-1.jpg";
import hero2 from "../public/images/Symtron_25.jpg";
import hero3 from "../public/images/hero-3.jpg";
import hero4 from "../public/images/hero-4.jpg";
import battery from "../public/icons/battery-low 1.svg"
import droplet from "../public/icons/droplet 1.svg"
import sprout from "../public/icons/sprout 1.svg"
import zap from "../public/icons/zap 1.svg"

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

export const SUST_STATS = [
  {
    icon: battery.src,
    desc: 'De baterias',
    stat: '100000',
    measure: 'kg'
  },
  {
    icon: sprout.src,
    desc: 'Equivalentes en CO2',
    stat: '36000',
    measure: 'kg',
    isGreen: true
  },
  {
    icon: droplet.src,
    desc: 'De agua',
    stat: '200000',
    measure: 'lts'
  },
  {
    icon: zap.src,
    desc: 'De energia',
    stat: '160000',
    measure: 'kwh'
  },
]

const ABOUT_IMAGES_BASE = [
  "/images/aboutPic/image 17.png",
  "/images/aboutPic/Symtron_50.jpg",
  "/images/aboutPic/image 19.png",
  "/images/aboutPic/Symtron_29.jpg",
  "/images/aboutPic/Producción pic 1.jpeg",
];

export const ABOUT_IMAGES = [
  {
    src: ABOUT_IMAGES_BASE[0],
    isOffset: true,
  },
  {
    src: ABOUT_IMAGES_BASE[1],
    isOffset: false,
  },
  {
    src: ABOUT_IMAGES_BASE[2],
    isOffset: true,
  },
  {
    src: ABOUT_IMAGES_BASE[3],
    isOffset: false,
  },
  {
    src: ABOUT_IMAGES_BASE[4],
    isOffset: true,
  },
];