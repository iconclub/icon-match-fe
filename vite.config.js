// libs
import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
    },
  },
  // eslint-disable-next-line no-undef
  base: process.env.NODE_ENV === "production" ? "/icon-match-fe/" : "",
});
