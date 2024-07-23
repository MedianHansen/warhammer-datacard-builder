import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

export default defineConfig({
    // config options
    plugins: [],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "ts/": fileURLToPath(new URL("./src/ts/", import.meta.url)),
        }
    },
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, "src/ts/testclass.js"),
            name: "test",
            // the proper extensions will be added
            fileName: "test",
        },
    },
    server: {
        http: {
            maxSessionMemory: 100
        }
    }
});