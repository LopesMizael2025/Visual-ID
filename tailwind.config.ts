import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        praia: {
          // Paleta oficial — Manual de Identidade Visual Praia Clube
          yellow: "#F4D800",
          black: "#130F14",
          ink: "#1D1D1B",
          graphite: "#1D1D1B",
          gray: "#5B5B5F",
          blue: "#008BD2",
          white: "#FFFFFF",
          paper: "#FAFAF7",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "SF Pro Display", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
