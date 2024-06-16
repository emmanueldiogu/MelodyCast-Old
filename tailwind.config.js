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
      },
      fontSize: {
        'clamp-h1': 'clamp(2.25rem, 1.6612359550561797rem + 2.397003745318352vw, 4.25rem)',
        'clamp-h2': 'clamp(1rem, 0.26436781609195403rem + 1.1494252873563218vw, 1.5rem)',
        'clamp-h3': 'clamp(1.6875rem, 1.2181776556776556rem + 0.9157509157509158vw, 2rem)',
        'clamp-h4': 'clamp(3.375rem, 2.154761904761905rem + 2.380952380952381vw, 4.1875rem)',
        'clamp-20': 'clamp(1.25rem, 0.7944444444444445rem + 0.8888888888888888vw, 1.75rem)',
        'clamp-day': 'clamp(0.9375rem, 0.1972222222222223rem + 1.4444444444444444vw, 1.75rem)',
      }
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
}
