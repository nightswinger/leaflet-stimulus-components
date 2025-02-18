import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  esbuild: {
    minifyIdentifiers: false,
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "LeafletStimulusComponents",
      fileName: "leaflet-stimulus-components",
    },
    rollupOptions: {
      external: ["@hotwired/stimulus", "leaflet"],
      output: {
        globals: {
          "@hotwired/stimulus": "Stimulus",
          leaflet: "L",
        },
      },
    },
  },
})
