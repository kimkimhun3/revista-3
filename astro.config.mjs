import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
import remarkGfm from "remark-gfm";
import icon from "astro-icon";
import { remarkReadingTime } from "./src/scripts/remark-reading-time.mjs";
import undiciRetry from "./src/scripts/undici-retry.js";
import react from "@astrojs/react";
import pagefind from "astro-pagefind";
// https://astro.build/config
export default defineConfig({
  site: "https://realm-5acf4.web.app",
  // image: {
  //   //domains: ["erfianugrah.com", "cdn.erfianugrah.com"],
  //   service: {
  //     entrypoint: "astro/assets/services/sharp",
  //     config: {
  //       limitInputPixels: false,
  //     },
  //   },
  // },
  integrations: [
    icon(),
    sitemap(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "rose-pine-dawn",
        defaultColor: false,
        themes: {
          light: "rose-pine-dawn",
          dark: "tokyo-night",
        },
        langs: [],
        wrap: true,
      },
      gfm: false,
    }),
    tailwind(),
    markdoc(),
    undiciRetry(),
    react(),
    pagefind()
  ],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "rose-pine-dawn",
      defaultColor: false,
      themes: {
        light: "rose-pine-dawn",
        dark: "tokyo-night",
      },
      langs: [],
      wrap: true,
    },
    gfm: false,
    remarkPlugins: [remarkGfm, remarkReadingTime],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  experimental: {
    clientPrerender: true,
    // directRenderScript: true
  },
  build: {
    concurrency: 4,
    measuring: {
      entryBuilding: true,
      pageGeneration: true,
      bundling: true,
      rendering: true,
      assetProcessing: true,
    },
  },
    devToolbar: {
    enabled: false
  }
});
