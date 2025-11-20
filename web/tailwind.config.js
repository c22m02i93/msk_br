/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        background: "#f5f2eb",
        foreground: "#1f1b16",
        primary: {
          DEFAULT: "#6b705c",
          foreground: "#f5f2eb",
        },
        secondary: {
          DEFAULT: "#b7b5ad",
          foreground: "#1f1b16",
        },
        muted: {
          DEFAULT: "#e6e3dc",
          foreground: "#5c5346",
        },
        accent: {
          DEFAULT: "#a68a64",
          foreground: "#1f1b16",
        },
        border: "#d6cfc4",
        input: "#d6cfc4",
        ring: "#6b705c",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(50, 50, 50, 0.35)",
      },
    },
  },
  plugins: [],
};
