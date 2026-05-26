// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gdsai4903.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});