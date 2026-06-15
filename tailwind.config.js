/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#ffffff',
        'canvas-soft': '#f6f5f4',
        hairline: '#e6e6e6',
        ink: '#000000',
        'ink-secondary': '#31302e',
        'ink-muted': '#615d59',
        'ink-faint': '#a39e98',
        primary: '#0075de',
        'primary-active': '#005bab',
        secondary: '#213183',
        'accent-sky': '#62aef0',
        'accent-purple': '#d6b6f6',
        'accent-purple-deep': '#391c57',
        'accent-pink': '#ff64c8',
        'accent-orange': '#dd5b00',
        'accent-orange-deep': '#793400',
        'accent-teal': '#2a9d99',
        'accent-green': '#1aae39',
        'accent-brown': '#523410',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'xs': '4px',
        'sm': '5px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'full': '9999px',
      }
    },
  },
  plugins: [],
}

