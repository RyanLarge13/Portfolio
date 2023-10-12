"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var vite_plugin_sitemap_1 = require("vite-plugin-sitemap");
var plugin_react_1 = require("@vitejs/plugin-react");
exports.default = (0, vite_1.defineConfig)({
    plugins: [
        (0, plugin_react_1.default)(),
        (0, vite_plugin_sitemap_1.default)({
            baseURL: "https://yourdomain.com",
            routes: [
                { url: "/", changefreq: "weekly", priority: 1.0 },
                { url: "/about", changefreq: "monthly", priority: 0.8 },
            ],
        }),
    ],
});
