import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-navy": "#071a3a",
        "navy-hovered": "#384761",
        "navy-disabled": "#B3B8C1",
        "sub-blue": "#a1b3e1",
        "main-brown": "#60584f",
        beige: "#b5aa9c",
        "sub-beige": "#f1ece1",
        "beige-hovered": "#D2CBC2",
        base: "#fdfcfb",
        "error-red": "#e14144",
        gray: {
          "0": "#fff",
          "100": "#f5f7f9",
          "200": "#e4e7ea",
          "300": "#b3b5bd",
          "400": "#9496a0",
          "500": "#777985",
          "600": "#404251",
          "700": "#282A39",
          "800": "#101222",
          "900": "#121212",
        },
      },
      fontSize: {
        "headline-40": ["40px", { lineHeight: "1.6" }],
        "headline-36": ["36px", { lineHeight: "1.6" }],
        "subheadline-32": ["32px", { lineHeight: "1.6" }],
        "subheadline-24": ["24px", { lineHeight: "1.6" }],
        "subheadline-20": ["20px", { lineHeight: "1.6" }],
        "subheadline-14": ["14px", { lineHeight: "1.6" }],
        "button-18": [
          "18px",
          { lineHeight: "normal", letterSpacing: "1.44px" },
        ],
        "body-18": ["18px", { lineHeight: "1.6" }],
        "button-16": [
          "16px",
          { lineHeight: "normal", letterSpacing: "1.28px" },
        ],
        "body-16": ["16px", { lineHeight: "1.6" }],
        "button-14": [
          "14px",
          { lineHeight: "normal", letterSpacing: "1.12px" },
        ],
        "body-14": ["14px", { lineHeight: "1.6" }],
        "body-12": ["12px", { lineHeight: "1.6" }],
        "caption-12": ["12px", { lineHeight: "1.4" }],
        "caption-10": ["10px", { lineHeight: "1.4" }],
        "mobile-8": ["8px", { lineHeight: "1.4" }],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};
export default config;
