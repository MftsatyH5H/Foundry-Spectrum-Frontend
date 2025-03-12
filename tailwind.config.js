/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        lightGrey: '#6D6D94',
        darkGrey: '#121212',
        darkPurple: '#050517',
        lightPurple: '#A17ACC',
        mediumPurple: '#332052',
        borderPurple: '#1f1f3a',
        foundrypurple:"#332052",
        lightpurple:"#DDBDFF",
        purple:"#5F358A",
        foundryyellow:"#E1ff00",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'linear-gradient(180deg, #6842A8 0%, #291A42 100%)',
        },
        ".scrollbar-webkit": {
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "200px",
        },
     
      "&::-webkit-scrollbar-track": {
        background: "background: rgba(0, 0, 0, 0.05)" ,
      },
      "&::-webkit-scrollbar-thumb": {
        background: "linear-gradient(180deg, #6842A8 0%, #291A42 100%)" ,
        BorderRadius: "9999px",
      },
    },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};
