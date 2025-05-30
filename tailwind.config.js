/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        background: "#e7e4df",
      },
    },
  },
  plugins: [],
};
