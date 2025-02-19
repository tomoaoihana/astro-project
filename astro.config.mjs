// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://shibajuku.net/",
  integrations: [sitemap()],

  //viteの設定
  vite: {
    // build: {
    //   cssTarget: "safari14",
    // },
  },
});
