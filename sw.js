// ExecYul Body Double — minimal service worker.
// Registers cleanly and passes all requests straight to the network.
// No caching on purpose: never serve a stale copy of the app.
self.addEventListener('install', () => { self.skipWaiting(); });
self.addEventListener('activate', (event) => { event.waitUntil(self.clients.claim()); });
