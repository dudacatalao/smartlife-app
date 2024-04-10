/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/styles/*.css" 
  ],
  theme: {
    extend: {
      colors:{
        emerald: colors.emerald,
        green1: '#87a878',
        green2: '#b0bc98',
        background:'#f5ebe0',
        mostarda: '#b99b69'
      }  
    },
  },
  plugins: [],
}
