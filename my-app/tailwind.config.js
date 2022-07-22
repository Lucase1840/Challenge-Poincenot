/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mb': '375px',
      // => @media (min-width: 375px) { ... }
      'dp': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
}
