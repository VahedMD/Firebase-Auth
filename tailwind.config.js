/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Great Vibes", "sans"],
      },
      dropShadow: {
        logo: "1rem 1rem 1rem red",
      },
    },
  },
  plugins: [],
};
