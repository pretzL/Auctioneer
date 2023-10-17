self.addEventListener("install", (e) => {
    console.log("[Service Worker] Install");
    e.waitUntil(
        caches.open("static").then((cache) => {
            return cache
                .addAll([
                    "/",
                    "/index.html",
                    "/listing.html",
                    "/listings.html",
                    "/profile.html",
                    "/dist/output.css",
                    "/img/favicon.png",
                    "/src/fonts/Raleway-VariableFont_wght.ttf",
                ])
                .catch((error) => {
                    console.error("Failed to cache:", error);
                });
        })
    );
});

self.addEventListener("activate", (e) => {
    console.log("Claiming control");
    return self.clients.claim();
});

self.addEventListener("fetch", (e) => {
    console.log(`[Service Worker] Fetch for: ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then((response) => {
            console.log("Match in cache:", response);
            return response || fetch(e.request);
        })
    );
});
