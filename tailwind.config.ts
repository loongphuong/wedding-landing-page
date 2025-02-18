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
        time: "rgb(178 116 13)",
      },
      backgroundColor: {
        prime: "#E2C697",
        info: "rgb(160 133 91 / 15%)",
      },
      boxShadow: {
        outer: "0 1px 10px 0 rgba(211, 222, 227, .7)",
      },
      keyframes: {
        all: {
          "0%": { opacity: "1", transform: "scale(1.3)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        topToBottom: {
          "0%": { transform: "translate(-50%,-170%)", opacity: "0" },
          "100%": { transform: "translate(-50%,-150%)", opacity: "1" },
        },
        smBottomToBottom: {
          "0%": { transform: "translate(-50%,-270%)", opacity: "0" },
          "100%": { transform: "translate(-50%,-250%)", opacity: "1" },
        },
        bottomToTopBgText: {
          "0%": { transform: "translate(-50%,500%)", opacity: "0" },
          "100%": { transform: "translate(-50%,400%)", opacity: "1" },
        },
        bottomToTopBgTimer: {
          "0%": { transform: "translate(-50%,-30%)", opacity: "0" },
          "100%": { transform: "translate(-50%,-50%)", opacity: "1" },
        },
        smBottomToTopBgText: {
          "0%": { transform: "translate(-50%,500%)", opacity: "0" },
          "100%": { transform: "translate(-50%,400%)", opacity: "1" },
        },
        smBottomToTopBgTimer: {
          "0%": { transform: "translate(-50%,10%)", opacity: "0" },
          "100%": { transform: "translate(-50%,0%)", opacity: "1" },
        },
      },
      animation: {
        all: "all 8s ease-in-out",
        topToBottom: "topToBottom 2s ease-in",
        bottomToTopBgText: "bottomToTopBgText 2s ease-in",
        bottomToTopBgTimer: "bottomToTopBgTimer 2s ease-in",
        smBottomToTopBgText: "smBottomToTopBgText 2s ease-in",
        smBottomToTopBgTimer: "smBottomToTopBgTimer 2s ease-in",
        smBottomToBottom: "smBottomToBottom 2s ease-in",
      },
    },
    fontFamily: {
      name: "var(--font-wind-song)",
      time: "var(--font-cormorant)",
    },
  },
  plugins: [],
} satisfies Config;
