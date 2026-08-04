/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0891b2', // cyan-600
          light: '#22d3ee',
          dark: '#0e7490',
        },
        accent: {
          DEFAULT: '#f97316', // orange-500 (coral)
          light: '#fb923c',
          dark: '#ea580c',
        },
        surface: {
          DEFAULT: '#f4fbfc',
          50: '#eefaf9',
          100: '#dcf3f1',
          200: '#c2e8e6',
          300: '#9fd8d8',
        },
        ink: {
          DEFAULT: '#0e2a30',
          soft: '#3c5a60',
          muted: '#6c8990',
        },
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(8,145,178,0.06), 0 8px 24px rgba(8,145,178,0.07)',
        'card-hover': '0 10px 34px rgba(8,145,178,0.18)',
        glow: '0 0 24px rgba(8,145,178,0.40)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 18px rgba(8,145,178,0.30)' },
          '50%': { boxShadow: '0 0 30px rgba(8,145,178,0.55)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
