import { defineConfig } from "astro/config";

import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import swup from "@swup/astro";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";

import SdepMoneConfig from "./app.config";
import pagefind from "astro-pagefind";
import vercel from "@astrojs/vercel";
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: SdepMoneConfig.site,

  integrations: [
    svelte(),
    react(),
    icon(),
    swup({
      theme: false,
      containers: ["main", "footer", ".banner-inner"],
      smoothScrolling: true,
      progress: true,
      cache: true,
      preload: true,
      updateHead: true,
      updateBodyClass: false,
      globalInstance: true,
    }),
    sitemap(),
    pagefind(),
  ],

  markdown: {
    shikiConfig: {
      theme: "github-dark-default",
    },
    remarkPlugins: [remarkReadingTime, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend",
        },
      ],
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  
  adapter: cloudflare(),
 // adapter: vercel(),
});