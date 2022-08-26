/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: 'DM Sans, sans-serif',
      roboto: 'Roboto',
      baloo: 'Baloo 2'
    },
    fontSize: {
      '5xl': '3.4rem'
    },
    colors: {
     yellow: {
      700: '#C47F17',
      500: '#DBAC2C',
      300: '#F1E9C9'
     },
      blue: {
        300: '#EBE5F9',
        500: '#8047F8',
        700: '#EBE5F9',
      },
      gray: {
        100: '#FAFAFA',
        200: '#F3F2F2',
        300: '#EDEDED',
        400: '#E6E5E5',
        500: '#D7D5D5',
        600: '#8D8686',
        700: '#574F4D',
        800: '#403937',
        900: '#272221'
      }
    }
  },
  plugins: [],
}
