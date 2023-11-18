/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{tsx,ts,js}'],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      letterStrong: 'var(--color-letter-strong)',
      letter: 'var(--color-letter)',
      bg: 'var(--color-bg)',
      grayStronger: 'var(--color-gray-stronger)',
      grayStrong: 'var(--color-gray-strong)',
      gray: 'var(--color-gray)',
      grayWeaker: 'var(--color-gray-weaker)',
      grayWeakest: 'var(--color-gray-weakest)',
      glass: 'var(--color-glass)',
    },
    fontSize: {
      '2xl': 'var(--font-huge)',
      xl: 'var(--font-big)',
      lg: 'var(--font-large)',
      base: 'var(--font-regular)',
      sm: 'var(--font-small)',
      xs: 'var(--font-tiny)',
      '2xs': 'var(--font-micro)',
    },
    lineHeight: {
      140: 1.4,
      160: 1.6,
    },
    extend: {
      spacing: {
        1.5: '6px',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
};
