/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      utilities: {
       

'products_div_for_shop': {
  '@apply  bg-fuchsia-800  rounded-b-3xl hover:bg-purple-950 flex text-white justify-center ':{},
}

      },
    },
  },
  plugins: [],
}

