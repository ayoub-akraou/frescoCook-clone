/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      screens: {
        'xs': "425px",
        ...defaultTheme.screens,
      },
    extend: {
      colors: {
        floralWhite: "rgb(var(--floral-white) / <alpha-value>)",
        primaryTomato: "rgb(var(--primary-tomato) / <alpha-value>)",
        lightPink: "rgb(var(--light-pink) / <alpha-value>)",
        tyrianPurple: "rgb(var(--tyrian-Purple) / <alpha-value>)",
        darkTyrianPurple: "rgb(var(--dark-tyrian-Purple) / <alpha-value>)",
        primaryGreen: "rgb(var(--primary-green) / <alpha-value>)",
        lightGreen: "rgb(var(--light-green) / <alpha-value>)",
        primaryOrange: "rgb(var(--primary-orange) / <alpha-value>)",
        lightOrange: "rgb(var(--light-orange) / <alpha-value>)",
        primaryYellow: "rgb(var(--primary-yellow) / <alpha-value>)",
        lightYellow: "rgb(var(--light-yellow) / <alpha-value>)",
        darkYellow: "rgb(var(--dark-yellow) / <alpha-value>)",
        darkGray: "rgb(var(--dark-gray) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
