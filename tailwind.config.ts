import type { Config } from 'tailwindcss';

import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [typography()],
  theme: {
    extend: {
      container: {
        center: true,
        screens: { '2xl': '1100px', xl: '1100px' }
      }
    },
    fontFamily: {
      mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans]
    }
  }
} satisfies Config;

