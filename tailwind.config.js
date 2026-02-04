/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0099FF",
        "primary-dark": "#0A84FF",
        "honor-blue": "#0091FF",
        "background-light": "#F3F4F6",
        "background-dark": "#18181B",
        "card-light": "#FFFFFF",
        "card-dark": "#27272A",
        "surface-light": "#E5E7EB",
        "surface-dark": "#374151",
        "code-bg-light": "#F5F5F7",
        "code-bg-dark": "#2C2C2E",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        '3xl': "1.5rem",
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
