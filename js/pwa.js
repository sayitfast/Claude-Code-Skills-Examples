/*
 * js/pwa.js
 * Registers the service worker (sw.js) so the catalog can be installed and used offline.
 * Service workers only run over http(s), so this does nothing when the page is opened from file://.
 */
(() => {
  "use strict";

  if (!("serviceWorker" in navigator)) return;
  if (location.protocol !== "https:" && location.protocol !== "http:") return;

  // When an updated service worker takes over an already-controlled page, reload once to show the new files.
  if (navigator.serviceWorker.controller) {
    let reloaded = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (reloaded) return;
      reloaded = true;
      location.reload();
    });
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch((err) => {
      console.warn("Service worker registration failed:", err);
    });
  });
})();
