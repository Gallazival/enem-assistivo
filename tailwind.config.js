/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@shrutibalasa/tailwind-grid-auto-fit")
  ],
}
