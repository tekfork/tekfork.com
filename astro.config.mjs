// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-expect-error -- tailwindcss() returns a PostCSS plugin; silence the TypeScript mismatch intentionally
    plugins: [tailwindcss()],
  },
});
