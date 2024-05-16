/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        100: '#32012F',
        light:'#E2DFD0',
        whatsapp:'#25d366'
      }
    },
  },
  plugins: [],
}

