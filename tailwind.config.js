/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        'main': '#FA9E42',
      },
      boxShadow: {
        'glass': '16px 16px 40px 0px rgba(0, 0, 0, 0.25)',
      },
      lineHeight: {
        'full': '100%',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
