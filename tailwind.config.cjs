/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color-blue": "#2a4a66",
        "second-color-orange": "#f36744",
        "third-color-light-blue": "#8ca7f3",
        "fourth-color-white": "#edeff7",
        "fifth-color-beige": "#EFE0C6",
        "sixt-color-green": "#4E6E61",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
