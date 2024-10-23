/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
       'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
      },
      fontWeight: {
        'ultra-light': '500',
      },
    },
  },
  plugins: [],
};
