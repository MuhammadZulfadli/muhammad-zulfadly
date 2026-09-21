/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F8F7F4",
        surface: "#F1F0ED",
        "surface-raised": "#E8E7E5",
        ink: "#08101F",
        body: "#6C757D",
        primary: "#000000",
        "on-primary": "#FFFFFF",
        hairline: "#E9E9E9",
        slate: "#212529",
        teal: "#4FC0D0",
        coral: "#EB6C31",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: ["Inconsolata", "SFMono-Regular", "Consolas", "monospace"],
      },
      borderRadius: {
        card: "15px",
      },
      boxShadow: {
        elevation: "rgba(0, 0, 0, 0.15) 0 8px 16px",
      },
    },
  },
  plugins: [],
};
