/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#f5f5f5",
          card: "#eaecef",
          text: "#202b3b",
          label: "#9399a2"
        },
        dark: {
          bg: "#0a131e",
          card: "#202b3b",
          text: "#dde0e4",
          label: "#9399a2"
        },
      },
    },
  },
  plugins: [],
};
