import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: 'file',
    assets: '_custom',
  },
});
