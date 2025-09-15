import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
    plugins: [react()],
    base: "./", // קריטי למניעת 404 בדיפלוי
    build: { outDir: "dist", assetsDir: "assets" }
});
