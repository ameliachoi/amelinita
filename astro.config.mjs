// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // TODO: reemplazar por el dominio real antes de desplegar (afecta sitemap.xml y canonical URLs)
  site: 'https://amelinita.com',

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ko'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [sitemap()],
  adapter: vercel()
});