import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname, "package")
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "package/index.ts"),
      name: "ElpCrud",
      fileName: "index"
    },
    outDir: "lib"
  }
});
