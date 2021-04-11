module.exports = {
  purge: ["./pages/**/**.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      "black-primary": "var(--color-black-primary)",
      "black-secondary": "var(--color-black-secondary)",
      "white-primary": "var(--color-white-primary)",
      "white-secondary": "var(--color-white-secondary)",
      "accent-primary": "var(--color-accent-primary)",
      "accent-secondary": "var(--color-accent-secondary)",
    },
    extend: {
      fontFamily: {
        body: ['"DM Sans"', "sans-serif"],
        title: ['"Source Serif Pro"', "serif"],
        monospace: ['"DM Mono"', "monospace"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
