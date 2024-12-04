import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "fs";

// https://vite.dev/config/
export default defineConfig({
    server: {
        host: "0.0.0.0", // Écoute sur toutes les interfaces réseau
        port: 3000, // ou toute autre port que vous souhaitez
    },
    base: "/portfolio/",
    plugins: [
        react(),
        {
            name: "copy-404-after-build",
            closeBundle() {
                copyFileSync("404.html", "dist/404.html");
                console.log("404.html copied to dist folder");
            },
        },
    ],
});
