/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xs": "280px",
        xs: "360px",
        sm: "412px",
        md: "717px",
      },
      colors: {
        "whisper-white": "#E5E5E5",
        "bunker-gray": {
          50: "#6E7A87",
          100: "#65707B",
          200: "#5C6670",
          300: "#535C65",
          400: "#49525A",
          500: "#40474F",
          600: "#373D43",
          700: "#2C3035",
          800: "#25292D",
          900: "#1C1F22",
        },
        "riptide-accent": "#93E1D8",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        petitformal: ["Petit Formal Script", "handwriting"],
        shortstack: ["Short Stack", "handwriting"],
        lato: ["Lato", "sans-serif"],
        spacegrotesk: ["Space Grotesk", "display"],
        outfit: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        "nav-shadow": "0 0 2px 3px rgba(147, 225, 216, 0.5)",
        "card-shadow": "0 0 2px 7px rgba(147, 225, 216, 0.25)",
        "navcontainer-shadow": "0 0 55px 0 rgba(147,225,216,0.70)",
      },
      backgroundImage: {
        "mainbg-image": "url('./assets/bg/dark-brick-wall.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
