/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        INTR: ["Inter", "serif"],
      },
      colors: {
        neonGreen: "#33ff01",
        whiteText: "#ffffff",
        border: "#9A9A9A",
      },
    },
  },
  plugins: [require("daisyui")],
};
