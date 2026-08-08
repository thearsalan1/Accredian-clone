import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1E3D",
          800: "#0F2748",
          900: "#081831",
        },
        indigo: {
          DEFAULT: "#4F46E5",
          600: "#4338CA",
        },
        amber: {
          DEFAULT: "#F5A623",
          600: "#DB8E12",
        },
        blue: {
          50: '#F3F7FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#1A73E8', // Exact brand blue from screenshot
          700: '#1557B0', // Hover state
          800: '#1e40af',
          900: '#1e3a8a',
        },
        paper: "#F7F8FA",
        slate: {
          DEFAULT: "#475569",
        },
        mist: "#E2E6ED",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        rail: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        rail: "rail 2.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
