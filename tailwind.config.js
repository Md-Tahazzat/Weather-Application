/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#DDE6ED",
        black: "#212428",
        "link-white": "#e4e6ea",
        "link-black": "#0d0d0d",
        "title-white": "#c4cfde",
        "title-black": "#151515",
        "color-white": "#9399a2",
        "color-black": "#171717",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#5C9CE5",
          "primary-focus": "mediumblue",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "#5C9CE5",
          "primary-focus": "mediumblue",
        },
      },
      ,
    ],
  },
};
