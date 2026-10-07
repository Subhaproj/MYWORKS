import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/MYWORKS/",
  plugins: [react()],
  assetsInclude: ["**/*.fbx"],
});