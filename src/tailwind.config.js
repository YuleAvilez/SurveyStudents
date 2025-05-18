/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: '#0f1117',
        acento: '#4cbfff',
        texto: '#ffffff',
      },
    },
  },
  plugins: [],
};
