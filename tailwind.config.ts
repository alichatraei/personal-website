import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gtWalshiem: ["var(--font-gt-walshiem-pro)"],
        inter: ["var(--font-inter)"],
      },
      backgroundImage:{
        "linear-gradient": "linear-gradient(89.81deg, #9845E8 -1.72%, #33D2FF 54.05%, #DD5789 99.78%)"
      }
      
    },
  },
  plugins: [
  require("daisyui"),
  ],
};
export default config;
