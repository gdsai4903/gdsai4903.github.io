// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gdsai4903.github.io',
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});