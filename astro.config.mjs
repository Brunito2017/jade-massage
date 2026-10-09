// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: reemplazar por el dominio real cuando esté registrado en NIC Chile
export default defineConfig({
  site: 'https://jadebellezayspa.cl',
  output: 'static',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    responsiveStyles: false,
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-serif',
      weights: ['400', '500', '600'],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-sans',
      weights: ['400', '500', '600'],
      styles: ['normal'],
      subsets: ['latin'],
    },
  ],

  integrations: [
    // Las páginas de trabajo (preview-*) no se publican ni entran al sitemap.
    sitemap({ filter: (page) => !page.includes('/preview-') }),
  ],
});
