import type { Config } from 'tailwindcss';

import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const typography = () =>
  plugin((api) => {
    const { addBase, theme } = api;

    addBase({
      h1: {
        fontSize: theme('fontSize.4xl'),
        fontWeight: theme('fontWeight.bold'),
        letterSpacing: '-0.075em',
        lineHeight: theme('lineHeight.tight')
      },
      h2: {
        fontSize: theme('fontSize.3xl'),
        fontWeight: theme('fontWeight.bold'),
        letterSpacing: theme('letterSpacing.tighter'),
        lineHeight: theme('lineHeight.tight')
      },
      h3: {
        fontSize: theme('fontSize.2xl'),
        fontWeight: theme('fontWeight.semibold'),
        letterSpacing: theme('letterSpacing.tighter'),
        lineHeight: theme('lineHeight.tight')
      },
      h4: {
        fontSize: theme('fontSize.xl'),
        fontWeight: theme('fontWeight.semibold'),
        letterSpacing: theme('letterSpacing.tighter'),
        lineHeight: theme('lineHeight.tight')
      },
      h5: {
        fontSize: theme('fontSize.lg'),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight')
      },
      h6: {
        fontSize: theme('fontSize.base'),
        fontWeight: theme('fontWeight.semibold'),
        lineHeight: theme('lineHeight.tight')
      }
    });
  });

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
      sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans]
    }
  }
} satisfies Config;

