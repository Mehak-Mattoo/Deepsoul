/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}", // Make sure your context folder is included
  ],
  theme: {
    extend: {
      colors: {
        beigeLight: "#f9e2c5",
      },
    },
  },
  plugins: [],
};
