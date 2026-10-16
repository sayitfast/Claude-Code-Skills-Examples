/*
 * sw.js
 * Service worker for the Top Claude Code Skill & Plugins catalog.
 * Precaches the app shell (including the pinned Bootstrap CDN files) so the catalog works offline.
 * Strategy: network-first for this site's own files, so edits show on the next reload when online,
 * with the cache as the offline fallback. The pinned Bootstrap CDN files never change, so they are cache-first.
 * Bump CACHE_VERSION whenever a shell file changes so old caches are cleared on activate.
 */
const CACHE_VERSION = "v5";
const CACHE_NAME = `cc-skills-${CACHE_VERSION}`;

const SHELL = [
  "./",
  "index.html",
  "plugins.html",
  "css/styles.css",
  "data/skills.js",
  "data/plugins.js",
  "js/app.js",
  "js/pwa.js",
  "manifest.webmanifest",
  "icons/logo.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(SHELL.map((url) => new Request(url, { mode: url.startsWith("http") ? "cors" : "same-origin" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("cc-skills-") && k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;
  const isCdn = url.origin === "https://cdn.jsdelivr.net";
  if (!sameOrigin && !isCdn) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Each page (index.html, plugins.html) is cached under its own URL; query strings are ignored for pages.
      const cached = await cache.match(request, { ignoreSearch: request.mode === "navigate" });
      if (cached && isCdn) return cached;

      try {
        const response = await fetch(request, { cache: "no-cache" });
        if (response.ok) cache.put(request, response.clone());
        return response;
      } catch (err) {
        if (cached) return cached;
        throw err;
      }
    })
  );
});
