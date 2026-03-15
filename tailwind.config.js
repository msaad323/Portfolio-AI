/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      colors: {
        background: "#020817",
        foreground: "#e5e7eb",
        accent: {
          DEFAULT: "#38bdf8",
          muted: "#0f172a"
        }
      }
    }
  },
  plugins: []
};

