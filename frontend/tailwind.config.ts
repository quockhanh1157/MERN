import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        "mobile": { 'max': '739px' },
        'tablet': { 'min': '740px', 'max': '1023px' },
        'desktop': { 'min': '1024px' }
      }
    },
  },
  plugins: [],
}
export default config
