import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'biru-terang': '#38D8FB',
        'tranparat': '#FFFFFF',
        'biru-tua': "#2C2E4D",
        'warna-tulisan': "#40436C",
        "warna-nav" : "#4B527E",
      },
    },
    fontFamily: {
      krona: ['Krona One', 'sans-serif'],
      'montserrat': ['Montserrat Alternates', 'sans-serif'],
      lexend: ['Lexend Giga', 'sans-serif'],
    },
  },
  plugins: [],
}
export default config
