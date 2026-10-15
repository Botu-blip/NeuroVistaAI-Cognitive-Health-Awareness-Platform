/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#EBF4FF',
          secondary: '#BEDAFF',
          accent: '#FFE5D9',
          accentHover: '#FFCBB3',
          background: '#FDFAF6',
          surface: '#F7FAFC',
          border: '#E2E8F0',
          green: '#F0FFF4',
          greenAccent: '#C6F6D5',
        },
        dark: {
          primary: '#0F172A',
          secondary: '#1E293B',
          accent: '#FF9F80',
          accentHover: '#FFB89C',
          background: '#0A0E14',
          surface: '#1E293B',
          border: '#475569',
          text: '#CBD5E1',
          textMuted: '#94A3B8',
          green: '#2F855A',
          greenAccent: '#9AE6B4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Nunito Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        body: '18px',
      }
    },
  },
  plugins: [],
}
