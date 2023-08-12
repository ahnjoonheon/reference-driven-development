/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(5%)' }
        },
        colorWave: {
          '0%, 100%': { color: '#ffffff' }, // White
          '50%': { color: '#1f2937' }
        },
        fontFamily: {
          'roboto': ['Roboto', 'sans-serif']
        }
      },
      animation: {
        wave: 'wave 1s infinite alternate',
        colorWave: 'colorWave 1s infinite alternate'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  variants: {
    extend: {
      width: ['hover'],
    }
  },
  plugins: [],
}
