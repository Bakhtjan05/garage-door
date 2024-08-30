/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {

        fontFamily: {
          asapRegular: ['AsapRegular', 'sans-serif'] ,
          asapSemiBold: ['AsapSemiBold', 'sans-serif'],  
          asapBold: ['AsapBold', 'sans-serif'], 
      },
      },
    },
    plugins: [],
  }