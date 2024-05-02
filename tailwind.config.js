/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  content: [
    './**/*.{html,js}',
    "./src/**/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    colors: {
      dpurp: '#250E47',  //Dark Purple
      mpurp: '#7E64BE',  //Medium Purple
      twhite: '#D9D9D9', //Text White
      tpurp: '#997FD9',  //Text Purple
      bwhite: '#FFF4F4', //Background White
      bgrey: '#BDBDBD',  //Background Grey
      tgreen: '#698C3B', //Text Green
      tred: '#D75353',   //Text Red

      //Default Colors
      transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			rose: colors.rose,
			pink: colors.pink,
			fuchsia: colors.fuchsia,
			purple: colors.purple,
			violet: colors.violet,
			indigo: colors.indigo,
			blue: colors.blue,
			sky: colors.sky,
			cyan: colors.cyan,
			teal: colors.teal,
			emerald: colors.emerald,
			green: colors.green,
			lime: colors.lime,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			red: colors.red,
			slate: colors.slate,
			zinc: colors.zinc,
			gray: colors.gray,
			neutral: colors.slate,
			stone: colors.stone,
    },
    extend: {
      fontFamily: {
        'nanum-gothic-coding': ["Nanum Gothic Coding", "monospace"],
      },
      backgroundImage: {
        'bgEstudiante': "url('src/assets/bgEstudiante.png')",
      }
    }
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
  ],
}

