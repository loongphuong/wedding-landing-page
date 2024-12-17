import type { Config } from "tailwindcss";

export default {
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
        prime: "#E2C697",
      },
      backgroundColor: {
        prime: "#E2C697",
      },
      boxShadow: {
        outer: "0 1px 10px 0 rgba(211, 222, 227, .7)",
      },
      keyframes: {
        all: {
          "0%": { opacity: "1", transform: "scale(1.2)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        topToBottom: {
          "0%": { transform: "translate(-50%,-170%)", opacity: "0" },
          "100%": { transform: "translate(-50%,-150%)", opacity: "1" },
        },
        bottomToTopBgText: {
          "0%": { transform: "translate(-50%,-130%)", opacity: "0" },
          "100%": { transform: "translate(-50%,-150%)", opacity: "1" },
        },
        bottomToTopBgTimer: {
          "0%": { transform: "translate(-50%,70%)", opacity: "0" },
          "100%": { transform: "translate(-50%,50%)", opacity: "1" },
        },
        smBottomToTopBgText: {
          "0%": { transform: "translate(-50%,15%)", opacity: "0" },
          "100%": { transform: "translate(-50%,-5%)", opacity: "1" },
        },
        smBottomToTopBgTimer: {
          "0%": { transform: "translate(-50%,70%)", opacity: "0" },
          "100%": { transform: "translate(-50%,50%)", opacity: "1" },
        },
      },
      animation: {
        all: "all 5s ease-in-out",
        topToBottom: "topToBottom 1s ease-in",
        bottomToTopBgText: "bottomToTopBgText 1s ease-in",
        bottomToTopBgTimer: "bottomToTopBgTimer 1s ease-in",
        smBottomToTopBgText: "smBottomToTopBgText 1s ease-in",
        smBottomToTopBgTimer: "smBottomToTopBgTimer 1s ease-in",
      },
    },
    fontFamily: {
      name: "var(--font-wind-song)",
      time: "var(--font-cormorant)",
    },
  },
  plugins: [],
} satisfies Config;
