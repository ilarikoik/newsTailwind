/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "news-blue": "#1a73e8",
        "light-white": "#ece8d9",
        "light-gray": "#d5f4e6",
      },
    },
  },
  plugins: [],
};
