export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{html,js}"
  ],
	darkMode: 'class', // false or "class" or "media"
  theme: {
    extend: {},
  },
  plugins: [  
    // require('@tailwindcss/forms') // se for utilizar tailwindcss/forms 👈
  ],
}