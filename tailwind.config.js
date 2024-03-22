/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundColor: {
      //   primary: "rgb(var(--color-primary) / <alpha-value>)",
      //   foreground: "rgb(var(--color-foreground) / <alpha-value>)",
      //   separator: "rgb(var(--color-separator) / <alpha-value>)",
      // },
      // textColor: {
      //   primary: "rgb(var(--color-foreground) / <alpha-value>)",
      // },
    },
  },
  plugins: [nextui()],
  darkMode: "class",
};
