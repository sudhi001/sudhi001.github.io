import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: '#dcdcdc', // Lighter text color for terminal
        background: '#1e1e1e', // Darker background
        highlight: '#00ff00', // Terminal-like highlight color
        cursor: '#00ff00', // Cursor color
      },
      fontFamily: {
        terminal: ['Fira Code', 'Courier New', 'monospace'], // Custom terminal font
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;

