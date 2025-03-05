/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'purpleGradient': 'linear-gradient(115deg, rgba(82, 53, 135, 0.12) 27.02%, rgba(20, 13, 33, 0.12) 96.63%)',
      },
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
};
