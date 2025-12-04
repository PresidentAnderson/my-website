/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // JAIC Brand Identity System
        onyx: {
          DEFAULT: '#0D0D0D',
          50: '#1A1A1A',
          100: '#0D0D0D',
        },
        slate: {
          DEFAULT: '#171A1F',
          50: '#2A2F38',
          100: '#1F2329',
          200: '#171A1F',
        },
        investigation: {
          DEFAULT: '#1C4C89',
          50: '#2E5FA1',
          100: '#1C4C89',
          200: '#163B6D',
        },
        signal: {
          DEFAULT: '#F5B85C',
          50: '#F7C77A',
          100: '#F5B85C',
          200: '#F3A940',
        },
        smoke: {
          DEFAULT: '#F4F4F4',
          50: '#FFFFFF',
          100: '#F4F4F4',
          200: '#E8E8E8',
        },
      },
      fontFamily: {
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        body: ['var(--font-ibm-plex)', 'system-ui', 'sans-serif'],
        technical: ['var(--font-jetbrains)', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'intelligence-grid': 'linear-gradient(to right, #171A1F 1px, transparent 1px), linear-gradient(to bottom, #171A1F 1px, transparent 1px)',
      },
      boxShadow: {
        'investigation': '0 4px 20px rgba(28, 76, 137, 0.15)',
        'evidence': '0 2px 12px rgba(13, 13, 13, 0.25)',
      },
    },
  },
  plugins: [],
}
