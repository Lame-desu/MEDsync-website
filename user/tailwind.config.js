/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust to your project's file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"], // Add the font to Tailwind
      },
    },
  },
  plugins: [],
};