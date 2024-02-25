import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     fontFamily:{
      gtWalshiem:['var(--font-gt-walshiem-pro)'],
      inter:['var(--font-inter)']
     }
    },
  },
  plugins: [],
};
export default config;
