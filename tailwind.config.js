/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: ["light"],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

// plugins: [require("tw-elements/dist/plugin.cjs")],