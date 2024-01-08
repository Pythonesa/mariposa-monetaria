/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mm-orange': '#de6600',
        'mm-yellow': '#fea02f',
        'mm-sand': '#ebd9c8',
        'mm-teal': '#007a7a',
        'mm-blue': '#003f5a',
      }
    },
  },
  plugins: [],
}

