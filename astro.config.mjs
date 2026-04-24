// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tekfork.com",
  integrations: [sitemap()],
  vite: {
    // @ts-expect-error -- tailwindcss() returns a PostCSS plugin; silence the TypeScript mismatch intentionally
    plugins: [tailwindcss()],
    esbuild: {
      pure: ["console.log"],
    },
  },
});
