import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    define: {
        __VUE_OPTIONS_API__: false,
    },
    plugins: [vue()],
    resolve: {
        alias: {
            src: fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "fd-components",
            formats: ["es"],
            fileName: (format: string) => `fd-components.${format}.js`,
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
        emptyOutDir: false,
    },
});
