/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/src/images/header.png')",
        
      },
      container:{
        center:true,
      }

    },
  },
  plugins: [],
}

