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
        },
      },
    },
  },
  plugins: [],
};
