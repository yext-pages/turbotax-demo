import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/pages/vite-plugin";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [react(), yextSSG(), visualizer({ template: "network" })],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
});
