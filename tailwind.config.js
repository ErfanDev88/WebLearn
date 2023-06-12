/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
        boxShadow: {
          '3xl': '0 5px 30px rgba(0, 0, 0, 0.030)',
          '4xl': '0 -5px 20px rgba(0, 0, 0, 0.030)',
          '5xl': '10px 0 40px rgba(0, 0, 0, 0.050)',
        }
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        sans: ['Vazirmatn', 'sans-serif'],
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
          md: '4rem',
          lg: '5rem',
          xl: '1rem',
          '2xl': '7rem',
        },
        center: true,
      }
  },
  plugins: [],
}
