/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ─── Stitch "Electric Kinetic" palette ───
        surface: {
          DEFAULT: "#06092f",
          dim: "#06092f",
          bright: "#202660",
          variant: "#1b2055",
          "container-lowest": "#000000",
          "container-low": "#0a0e38",
          container: "#101442",
          "container-high": "#151a4c",
          "container-highest": "#1b2055",
        },
        primary: {
          DEFAULT: "#94abf5",
          dim: "#849be4",
          fixed: "#8ea6f0",
          "fixed-dim": "#8199e1",
          container: "#869ee7",
        },
        secondary: {
          DEFAULT: "#00d2fd",
          dim: "#00c3eb",
          fixed: "#79dfff",
          "fixed-dim": "#1cd5ff",
          container: "#00677e",
        },
        tertiary: {
          DEFAULT: "#b6ffed",
          dim: "#00e8c9",
          fixed: "#26fedc",
          "fixed-dim": "#00efce",
          container: "#26fedc",
        },
        "on-surface": "#e3e3ff",
        "on-surface-variant": "#a5a8d5",
        "on-primary": "#0a2a6c",
        "on-primary-container": "#001e5a",
        "on-secondary": "#004352",
        "on-secondary-container": "#eefaff",
        "on-tertiary": "#006657",
        outline: "#6f729d",
        "outline-variant": "#41456c",
        error: "#ff716c",
        // Accent (kept for paint trail / floating CTA)
        accent: {
          DEFAULT: "#00d2fd",
          soft: "#79dfff",
        },
      },
      fontFamily: {
        headline: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        label: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
        gradient: "gradient 8s ease infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "1" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
