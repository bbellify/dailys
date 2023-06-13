module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6464",
        seconday: "#2EC4B6",
        accent1: "#FFD23F",
        accent2: "#FF9F1C",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "-translateX(5px)" },
          "50%": { transform: "translateX(5px)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out infinite",
      },
    },
  },
  screens: {},
  variants: {
    extend: {},
  },
  plugins: [],
};
