/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
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
      }
    },
  },
  plugins: [],
};
