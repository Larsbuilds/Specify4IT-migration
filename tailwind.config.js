/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1A2B3C',
          light: '#3E7CB1',
        },
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#F8F9FA',
        },
        neutral: {
          DEFAULT: '#333333',
          secondary: '#666666',
        },
        border: {
          DEFAULT: '#E5E7EB',
          light: 'rgba(26, 43, 60, 0.1)', // #1A2B3C with 10% opacity
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2' }],
        'h2': ['2rem', { lineHeight: '1.25' }],
        'h3': ['1.75rem', { lineHeight: '1.3' }],
        'h4': ['1.5rem', { lineHeight: '1.35' }],
        'h5': ['1.25rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.5' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem',
        'section-lg': '8rem',
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
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
        slideDown: 'slideDown 0.5s ease-out',
      },
      colors: {
        primary: {
          DEFAULT: '#1A2B3C',
          light: '#3E7CB1',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F8F9FA',
          foreground: '#666666',
        },
        text: {
          primary: '#333333',
          secondary: '#666666',
        },
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#F8F9FA',
        },
        text: {
          primary: '#333333',
          secondary: '#666666',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        h1: '40px',
        h2: '32px',
        h3: '28px',
        h4: '24px',
        h5: '20px',
        body: '16px',
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
