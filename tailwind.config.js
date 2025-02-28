/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        lightGrey: '#a3a3a3',
        darkGrey: '#121212',
        foundrypurple:"#332052",
        lightpurple:"#DDBDFF",
        purple:"#5F358A",
        foundryyellow:"#E1ff00",
      },
    },
  },
  plugins: [
    flowbite.content(),
  ],
};
