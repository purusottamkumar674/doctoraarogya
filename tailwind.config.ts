import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0F3D6E",
        navyDeep: "#0A2A4D",
        sky: "#33A1FF",
        skyLight: "#E8F4FF",
        green: "#28A745",
        greenDark: "#1E7E34",
        ink: "#152437",
        slateBlue: "#4C6070",
        paper: "#F6F9FC",
        line: "#DCE6F0",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,61,110,0.06), 0 10px 28px rgba(15,61,110,0.08)",
        lift: "0 16px 36px rgba(15,61,110,0.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(40,167,69,0.45)" },
          "50%": { boxShadow: "0 0 0 10px rgba(40,167,69,0)" },
        },
        growLine: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        kenBurns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        fadeIn: "fadeIn 0.6s ease-out forwards",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
        growLine: "growLine 1s ease-out forwards",
        kenBurns: "kenBurns 6.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
