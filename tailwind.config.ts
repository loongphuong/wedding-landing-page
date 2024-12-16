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
    },
    fontFamily: {
      name: "var(--font-wind-song)",
      time: "var(--font-cormorant)",
    },
  },
  plugins: [],
} satisfies Config;
