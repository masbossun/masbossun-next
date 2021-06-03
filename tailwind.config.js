module.exports = {
  mode: "jit",
  purge: ["./pages/**/**.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  variants: {
    extend: {},
  },
  theme: {
    colors: {
      "black-primary": "var(--color-black-primary)",
      "black-secondary": "var(--color-black-secondary)",
      "white-primary": "var(--color-white-primary)",
      "white-secondary": "var(--color-white-secondary)",
      "accent-primary": "var(--color-accent-primary)",
      "accent-secondary": "var(--color-accent-secondary)",
    },
    screens: {
      sm: "640px",
      md: "720px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    extend: {
      fontFamily: {
        body: ['"DM Sans"', "sans-serif"],
        title: ['"Source Serif Pro"', "serif"],
        monospace: ['"DM Mono"', "monospace"],
      },
      maxWidth: {
        "page-title": "15ch",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.black-primary"),
            img: { marginBottom: 0 },
            figcaption: {
              opacity: 0.6,
              fontFamily: theme("fontFamily.monospace")[0],
              fontSize: "0.75rem",
              textAlign: "center",
            },
            a: {
              color: theme("colors.accent-primary"),
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            code: {
              fontFamily: theme("fontFamily.monospace")[0],
              fontWeight: 400,
              paddingLeft: "4px",
              paddingRight: "4px",
              wordBreak: "break-all",
              backgroundColor: theme("colors.white-secondary"),
            },
            pre: {
              backgroundColor: theme("colors.black-secondary"),
            },
            "pre code": {
              fontFamily: theme("fontFamily.monospace")[0],
              fontWeight: 400,
              lineHeight: 1,
              paddingLeft: 0,
              paddingRight: 0,
              wordBreak: "normal",
              backgroundColor: theme("colors.black-secondary"),
            },
            "figure > img": {
              width: "100%",
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.white-primary"),
            strong: {
              color: theme("colors.white-primary"),
              fontWeight: 700,
            },
            figcaption: {
              color: theme("colors.white-primary"),
            },
            a: {
              color: theme("colors.accent-secondary"),
            },
            h1: {
              color: theme("colors.white-primary"),
            },
            h2: {
              color: theme("colors.white-primary"),
            },
            h3: {
              color: theme("colors.white-primary"),
            },
            h4: {
              color: theme("colors.white-primary"),
            },
            h5: {
              color: theme("colors.white-primary"),
            },
            code: {
              color: theme("colors.white-primary"),
              backgroundColor: theme("colors.black-secondary"),
            },
            "ol > li::before": {
              color: theme("colors.white-primary"),
            },
            blockquote: {
              color: theme("colors.white-primary"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
