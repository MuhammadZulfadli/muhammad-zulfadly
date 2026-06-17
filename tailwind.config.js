/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ink-black': '#1a1a1a',
        'paper-white': '#ffffff',
        'graphite': '#6a6a6a',
        'warm-charcoal': '#4d3f32',
        'fog': '#f6f6f6',
        'linen': '#ececec',
        'hairline': '#e3e3e3',
        'pebble': '#8d8d8d',
        'sage': '#547e69',
        'mint-wash': '#f1fcf6',
      },
      fontFamily: {
        'crimson': ['"Crimson Pro"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        'inter': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        'georgia': ['Georgia', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'md': '4px',
        'lg': '8px',
        'xl': '12px',
        '3xl': '24px',
        'full': '9999px',
        'cards': '12px',
        'pills': '9999px',
        'badges': '4px',
        'images': '12px',
        'buttons': '8px',
      },
      boxShadow: {
        'sm': 'rgba(0, 0, 0, 0.06) 0px 2px 6px 0px',
        'subtle': 'rgba(0, 0, 0, 0.03) 0px 1px 3px 0px, rgba(0, 0, 0, 0.03) 0px 5px 5px 0px, rgba(0, 0, 0, 0.02) 0px 10px 6px 0px',
      },
    },
  },
  plugins: [],
}
