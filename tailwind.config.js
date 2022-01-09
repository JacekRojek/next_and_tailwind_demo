const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#FFE300',
      'secondary': '#1c1e22',
      'background': '#32383E',
      'background-dark': '#1c1e22',
      'background-light': '#272b30',
      'white': colors.white
    }
  },
  plugins: []
}
