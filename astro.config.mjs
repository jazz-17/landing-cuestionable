// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  site: 'https://cuestionable.pe',
  session: {
    driver: "memory",
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },

    imageService: "compile"
  }),
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
  integrations: [vue(), sitemap()],
});
