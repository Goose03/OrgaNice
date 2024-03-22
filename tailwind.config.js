/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './**/*.{html,js}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      dpurp: '#250E47',  //Dark Purple
      mpurp: '#7E64BE',  //Medium Purple
      twhite: '#D9D9D9', //Text White
      tpurp: '#997FD9',  //Text Purple
      bwhite: '#FFF4F4', //Background White
      bgrey: '#BDBDBD'   //Background Grey
    },
  },
  plugins: [],
}

