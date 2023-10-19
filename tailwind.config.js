/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens:{
        'xs':{
         min:"300px","max":"600px",
        },
    },
    colors: {
      'light-green': '#bef264',
    },
    font:{
'xs':{
      
},
    },
  },
  plugins: [],
},
}
