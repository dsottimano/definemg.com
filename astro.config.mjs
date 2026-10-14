import { lanzaConfig } from "lanza-site/astro";
import sitemap from "@astrojs/sitemap";
import { copyFile } from "node:fs/promises";

const config = lanzaConfig();
config.integrations = [
  sitemap({ filter: (url) => !/\/(admin|style-preview|posts)(\/|$)/.test(new URL(url).pathname) }),
  {
    name: "define-sitemap-alias",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        await copyFile(new URL("sitemap-index.xml", dir), new URL("sitemap.xml", dir));
      },
    },
  },
];
export default config;
