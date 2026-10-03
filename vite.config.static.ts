// Temporary config for the static HTML export package (not used by the app).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  vite: {
    plugins: [imagetools()],
    nitro: {
      preset: "static",
      prerender: { routes: ["/", "/vietnam", "/leads"] },
    },
    tanstackStart: {
      server: { entry: "server" },
    },
  },
});
