// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins']
      },
      spacing:{
        'origamid-s': '0.625rem',
        'origamid-normal': '1.25rem',
      }
      ,
      colors: {
        origamid: {
          "1": "#463220",
          "2": "#66593C",
          "3": "#ECEADD",
          "4": "#F7F8F5",
          "5": "#FFF"

        },
      },
    },
  },
  plugins: [],
};
