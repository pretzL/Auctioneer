/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,mjs}", "./*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "main-green": "#2D8C70",
        "light-green": "#9DBFB5",
        "dark-green": "#1D5947",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
