import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import https from "node:https";

// Lovable asset proxy — proxies /__l5e/assets-v1/* to the preview host.
const LOVABLE_PREVIEW_HOST = "id-preview-e89db76d--6f28d1d2-1d99-4e9d-ba11-0e398e612d98.lovable.app";

/** @returns {import("vite").Plugin} */
function lovableAssetsProxy() {
  const ASSET_RE = /^\/__l5e\/assets-v1\//;
  const HOP_BY_HOP = new Set([
    "host",
    "connection",
    "keep-alive",
    "transfer-encoding",
    "content-length",
  ]);
  return {
    name: "lovable:assets-proxy",
    configureServer(server) {
      if (!LOVABLE_PREVIEW_HOST) return;
      server.middlewares.use((req, res, next) => {
        const url = req.url ?? "";
        if (!ASSET_RE.test(url)) return next();
        const upstream = https.request(
          {
            host: LOVABLE_PREVIEW_HOST,
            port: 443,
            method: req.method,
            path: url,
            headers: {
              ...Object.fromEntries(
                Object.entries(req.headers).filter(
                  ([k]) => !HOP_BY_HOP.has(k.toLowerCase())
                )
              ),
              host: LOVABLE_PREVIEW_HOST,
            },
          },
          (upRes) => {
            res.statusCode = upRes.statusCode ?? 502;
            for (const [k, v] of Object.entries(upRes.headers)) {
              if (v === undefined || HOP_BY_HOP.has(k.toLowerCase())) continue;
              res.setHeader(k, v);
            }
            upRes.pipe(res);
          }
        );
        upstream.on("error", (err) => {
          console.error("Asset proxy error:", err.message);
          if (!res.headersSent) {
            res.statusCode = 502;
            res.end();
          }
        });
        req.pipe(upstream);
      });
    },
  };
}

export default defineConfig({
  site: "https://airnova.design",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss(), lovableAssetsProxy()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
});
