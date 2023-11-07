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
          "50": "#f7fde8",
          "100": "#ebfacd",
          "200": "#d8f5a1",
          "300": "#bcec6a",
          "400": "#a2df3c",
          "500": "#83c51d",
          "600": "#69a414",
          "700": "#4c7813",
          "800": "#3f5f15",
          "900": "#365017",
          "950": "#1a2c07",
        },
        secondary: {
          "50": "#fcfaea",
          "100": "#faf2c7",
          "200": "#f6e592",
          "300": "#f0cf54",
          "400": "#e9b826",
          "500": "#daa118",
          "600": "#b77912",
          "700": "#965912",
          "800": "#7c4717",
          "900": "#6a3b19",
          "950": "#3e1e0a",
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
