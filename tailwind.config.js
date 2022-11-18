/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,mjs}"],
  theme: {
    extend: {
      colors: {
        "main-green": "#2D8C70",
        "light-green": "#9DBFB5",
        "dark-green": "#1D5947",
      },
    },
  },
  plugins: [require("daisyui")],
};
