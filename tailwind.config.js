/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        "primary-color":{
          "left-chat": "hsla(276,55%,52%,1)",
          "right-chat": "hsla(271,15%,43%,1)",
          "gray-violet": "hsla(270,7%,64%,1)",
          "placeholder": "hsla(26,7%,79%,0.5)"
        },
        "gradient-color": {
          "magenta": "hsla(293,100%,63%,1)",
          "violet": "hsla(264,100%,61%,1)"
        },
        "secondary-color": {
          "white": "#fff",
          "chat-bgrn": "hsla(270,20%,96%,1)",
          "submit-btn": "hsla(271,36%,24%,1)",
          "radio-outline": "hsla(289,100%,72%,1)"
        }
      }
    },
  },
  plugins: [],
}

