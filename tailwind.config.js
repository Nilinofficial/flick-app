/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors :{
            primaryBg:'#121212',
            primaryText:'#fafafa',
            primaryInput:'#1E1E1E'
        }
      },
    },
    plugins: [],
  }