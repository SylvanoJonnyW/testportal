/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#014751',
      },
      colors: {
        primary: '#014751',
        'primary-2': '#0d616c',
        secondary: '#FFEEB4',
        'secondary-2': '#fffaeb',
        third: '#AFF8C8',
        fourth: '#00D37F',
        'bg-Input': '#D2C4FB',
        input: '#6F6689',
      },
      screens: {
        desktop: '1280px',
      },
      borderWidth: {
        3: '3px',
      },
      textUnderlineOffset: {
        9: '9px',
        10: '10px',
        11: '11px',
      },
    },
  },
  plugins: [],
};
