/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        footer: "#263238",
        ewhagreen: "#004D2C",
        linear: {
          banner1: "#142D3E",
          banner2: "#15F231",
          content1: "#4CAF4F",
          content2: "#2E4E2D",
          content3: "#1F1C1C",
        },
      },
      backgroundImage: {
        banner: "url('/image/banner_background.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
