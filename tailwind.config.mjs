/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "lines-fade":
          "url(\"data:image/svg+xml,%3Csvg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='fade' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(211,211,211);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(211,211,211);stop-opacity:0' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1px' height='100%' fill='url(%23fade)' /%3E%3C/svg%3E\")",
        "radial-custom": "radial-gradient(circle, #f5f5f5 0%, #FDFDEA 100%)",
        "radial-custom-blue":
          "radial-gradient(circle, #f5f5f5 0%, #E0E5EE 100%)",
      },
      backgrounButton: {
        "linear-gradient": "linear-gradient(145deg, #85FF33, #4472C4)",
      },
      screens: {
        "3xl": "1920px",
      },
      colors: {
        "selfia-green": "#85FF33",
        "selfia-blue": "#4472C4",
        "faded-white": "#F5F5F5",
        "faded-black": "#252525",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
