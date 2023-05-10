import react from "@vitejs/plugin-react";
import { defineConfig, InlineConfig, UserConfig } from "vite";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setup.ts",
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
} as VitestConfigExport);
