import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
    plugins: [react()],
    base: "./", // נתיב יחסי לפריסה
    build: { outDir: "dist", assetsDir: "assets" },
    server: {
        port: 3000,
        open: true,
        cors: true, // אפשר CORS לפריסה
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    }
});
