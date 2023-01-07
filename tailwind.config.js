/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {

    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif'],
      'Special Elite': ['Special Elite', 'cursive']
    },

    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
