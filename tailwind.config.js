/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        wybt: {
          primary: "#45062E",
          secondary: "#8E085D",
          accent: "#E5A4CB",
          white: "#F00917",
          neutral: "#838383",
          error: "#F00917",
          "neutral-white": "#E7E6E9",
          "neutral-black": "#1F1A1D",
          "light-gray": "#838383",
        },
      },
    },
  },
  plugins: [],
};
