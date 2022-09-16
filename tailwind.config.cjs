/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      bold : ['Roboto'],
      extrabold : ['Baloo Bhaina 2'],
      // 'roboto' : ['Roboto','sans-serif'],
    },
    fontSize: {
      'xs' : ['12px','13px'],
      'base' : '16px',
      'lg' : '20px',
      '5xl': '48px',
      '3xl' : '32px'
    },
    colors: {
    white: 
      '#FFF'
    ,
     yellow: {
      700: '#C47F17',
      500: '#DBAC2C',
      300: '#F1E9C9'
     },
      blue: {
        300: '#EBE5F9',
        500: '#8047F8',
        700: '#4B2995',
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
