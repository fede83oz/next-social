import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenvogue: {
          50: '#eef8ff',
          100: '#dcf0ff',
          200: '#b2e3ff',
          300: '#6dceff',
          400: '#20b5ff',
          500: '#009bff',
          600: '#007bdf',
          700: '#0061b4',
          800: '#005395',
          900: '#00447a',
          950: '#002d56',      
          },
      },
      fill:{
        greenvogue: {
          50: '#eef8ff',
          100: '#dcf0ff',
          200: '#b2e3ff',
          300: '#6dceff',
          400: '#20b5ff',
          500: '#009bff',
          600: '#007bdf',
          700: '#0061b4',
          800: '#005395',
          900: '#00447a',
          950: '#002d56',      
          },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
