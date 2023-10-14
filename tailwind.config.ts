import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1560px",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#edf6ff",
          100: "#d7e8ff",
          200: "#b9d8ff",
          300: "#88c1ff",
          400: "#509fff",
          500: "#2878ff",
          600: "#1659ff",
          700: "#0a3feb",
          800: "#0f34be",
          900: "#133295",
          950: "#11205a",
        },
        secondary: {
          50: "#ecfdff",
          100: "#cff8fe",
          200: "#a4effd",
          300: "#66e3fa",
          400: "#21cbef",
          500: "#05b9e3",
          600: "#078bb3",
          700: "#0d6e91",
          800: "#145a76",
          900: "#164b63",
          950: "#083044",
        },

        "black-white": "rgb(var(--color-black-white) / <alpha-value>)",
        "white-black": "rgb(var(--color-white-black) / <alpha-value>)",

        dual: "rgb(var(--color-dual) / <alpha-value>)",
      },
      spacing: {
        4.5: "1.25rem",
        5.5: "1.375rem",
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        27: "6.75rem",
        30: "7.5rem",
        128: "32rem",
        144: "36rem",
      },
      transitionDuration: { 0: "0ms", 150: "150ms", 250: "250ms" },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
      },
    },
  },
  plugins: [],
};

export default config;
