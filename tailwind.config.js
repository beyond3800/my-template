/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navDark:'rgb(1,11,19)',
        dark: 'rgb(1,11,9)',
        light: 'hsla(220, 20%, 97.6%, 1)',
      },
      fontFamily: {
        Roboto:'Roboto',
      }
    },
  },
  plugins: [],
}
