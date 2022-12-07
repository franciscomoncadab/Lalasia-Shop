/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary-color': '#6E9996',
      'secondary-color': '#FFB23F',
      'title-color': '#151411',
      'paragraph-color': '#AFADB5',
      'placeholder-color': '#F9F9F9',
      'screen-color': '#FFFFFF',
      'line-color': '#F3F3F3',
    },
    fontFamily: {
      exodo: ['EudoxusSans-Bold', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
