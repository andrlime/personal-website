import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Example alias
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern-compiler", // or "modern", "legacy"
      },
    },
  },
  preview: {
    host: true,
    port: 8080,
    allowedHosts: ["*", "clownfish-app-hez8v.ondigitalocean.app", "andrewli.org", "www.andrewli.org", "andrewli.net", "www.andrewli.net"]
  }
});
