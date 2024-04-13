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
          white: "#FFFFFF",
          secondary: "#8E085D",
          accent: "#E5A4CB",
          neutralWhite: "#E7E6E9",
          error: "#F00917",
          neutralBlack: "#1F1A1D",
          whiteBg: "#F8F7F9",
          neutral: "#838383",
          lightGrey: "#C2C2C2"
        },
      },
    },
  },
  plugins: [],
};
