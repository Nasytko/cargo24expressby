import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const site = 'https://cargo24express.by';

export default defineConfig({
  site,
  integrations: [tailwind({ applyBaseStyles: true }), sitemap({ i18n: { defaultLocale: 'ru', locales: { ru:'ru', en:'en', zh:'zh' } } })],
  trailingSlash: 'always',
  compressHTML: true
});