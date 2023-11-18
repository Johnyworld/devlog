/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{tsx,ts,js}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
};
