/** @type {import('tailwindcss').Config} */
const { withAnimations } = require('animated-tailwindcss')


module.exports = withAnimations({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'jacquarda': ['Jacquarda Bastarda 9', 'cursive'],
      },
      cursor: {
        default: "url('/cursor.png'), default",
        pointer: "url('/cursor.png'), pointer",
      },
    },
  },
  plugins: [],
});
