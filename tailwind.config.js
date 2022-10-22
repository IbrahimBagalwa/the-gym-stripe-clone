/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sohne-var', 'Helvetica Neue', 'Arial', 'sans-serif'],
        sourceCodePro: ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        primary: '#FF5A5F',
      },
    },
  },
  plugins: [],
};
