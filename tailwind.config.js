/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'oswald-bold': ['font-oswald-bold', 'sans-serif'],
        'oswald-extralight': ['font-oswald-extralight', 'sans-serif'],
        'oswald-light': ['font-oswald-light', 'sans-serif'],
        'oswald-regular': ['font-oswald-regular', 'sans-serif'],
        'oswald-medium': ['font-oswald-medium', 'sans-serif'],
        'oswald-semibold': ['font-oswald-semibold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

