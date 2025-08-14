// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
        fontFamily: {
            // 'roboto' is the custom class you'll use in your React components
            // ['Roboto', 'sans-serif'] is the font stack, with 'Roboto' being the imported font
            sora: ['Sora', 'sans-serif'],
            mycustomfont: ['MyCustomFont', 'sans-serif'], // For local fonts
        },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}