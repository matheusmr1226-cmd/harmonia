/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1DB954",
        dark: "#121212",
        light: "#FFFFFF"
      }
    }
  },
  plugins: []
};