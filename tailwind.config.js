/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:"#151523",
        lightDark:"hsla(0,0%,100%,.16)"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ]
}

