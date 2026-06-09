import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0C10",
        bgsoft: "#0F1218",
        surface: "#14181F",
        surface2: "#1A1F28",
        bd: "rgba(255,255,255,0.08)",
        bdstrong: "rgba(255,255,255,0.16)",
        ink: "#EDF0F5",
        dim: "#98A2B3",
        faint: "#6B7280",
        accent: "#7B6CF6",
        accenthi: "#9A8DFF",
        accentsoft: "rgba(123,108,246,0.14)",
        mint: "#34E0B0",
        wa: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        container: "1180px",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
    },
  },
  plugins: [],
};
export default config;
