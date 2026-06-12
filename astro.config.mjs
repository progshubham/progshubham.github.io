// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://progshubham.github.io',
  build: {
    // Inline all CSS into the HTML — removes a render-blocking request,
    // which matters most on high-latency (2G/3G) connections
    inlineStylesheets: "always",
  },
});
