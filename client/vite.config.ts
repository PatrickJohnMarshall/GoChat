import { defineConfig, optimizeDeps } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 5000,
    proxy: {
      "/graphql": {
        target: "ws://localhost:4000",
        ws: true,
      },
    },
  },
  optimizeDeps: {
    include: ["graphql-ws"],
  },
});
