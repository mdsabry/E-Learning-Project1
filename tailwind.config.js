/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        // primary: "#3498db",
        // secondary: "#f1c40f",
        // primary: "#f7ba34",
        // secondary: "#69a79c",
        primary: "#ffb228",
        secondary: "#0076fa",
        light: "#f7f7f7",
        dark: "#333333",
        gray: "#999999",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
