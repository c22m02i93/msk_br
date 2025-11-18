/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          blue: '#1E67B7',
          dark: '#0E2A47',
          gold: '#F7D046',
          beige: '#F8F5EE'
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        }
      },
      boxShadow: {
        card: '0px 20px 60px rgba(8, 46, 108, 0.08)',
        header: '0px 12px 40px rgba(8, 46, 108, 0.08)',
        soft: '0px 8px 24px rgba(17, 24, 39, 0.06)'
      },
      borderRadius: {
        xl: '18px'
      }
    }
  },
  plugins: []
};
