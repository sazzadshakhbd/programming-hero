/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {

        "primary": "#61bec6",

        "secondary": "#f7b9ee",

        "accent": "#d9fc8d",

        "neutral": "#282636",

        "base-100": "#364D59",

        "info": "#4992CA",

        "success": "#197158",

        "warning": "#BB6A07",

        "error": "#F54724",
      },
    },
  ],
  plugins: [require("daisyui")],
}
