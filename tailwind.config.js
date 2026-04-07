/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,html}',
  ],
  theme: {
    extend: {
      colors: {
        meetup: {
          red:       '#e3082c',
          'red-dark':'#c30726',
          'red-light':'#ff4762',
          'red-50':  '#fff1f3',
          dark:      '#1c0e0e',
          blue:      '#476eff',
          'blue-light':'#f7faff',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        card: '0.75rem',
        btn:  '9999px',
      },
      boxShadow: {
        card:       '0 2px 8px 0 rgba(0,0,0,0.08)',
        'card-hover':'0 6px 20px 0 rgba(0,0,0,0.14)',
      },
    },
  },
  plugins: [],
};
