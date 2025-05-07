// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// a comment
// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
});