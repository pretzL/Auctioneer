const API_BASE_URL = "https://nf-api.onrender.com";

let requestQueue = [];

self.addEventListener("install", (e) => {
    console.log("[Service Worker] Install");
    e.waitUntil(
        caches.open("static").then((cache) => {
            return cache
                .addAll([
                    "./manifest.json",
                    "./index.html",
                    "./listing.html",
                    "./listings.html",
                    "./profile.html",
                    "./dist/output.css",
                    "./img/favicon.png",
                    "./icons/manifest-icon-192.maskable.png",
                    "./src/fonts/Raleway-VariableFont_wght.ttf",
                    "./img/Logo.png",
                    "./img/Logo.svg",
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
    const clonedRequestForFetch = e.request.clone();
    const clonedRequestForSerialization = e.request.clone();

    if (e.request.url.startsWith(API_BASE_URL)) {
        if (e.request.method === "GET") {
            e.respondWith(
                fetch(clonedRequestForFetch)
                    .then((response) => {
                        // Cache the response against the original request
                        const clonedResponse = response.clone();
                        caches.open("dynamic").then((cache) => cache.put(e.request, clonedResponse));
                        return response;
                    })
                    .catch((error) => {
                        return caches.match(e.request).then((cachedResponse) => {
                            if (cachedResponse) {
                                return cachedResponse;
                            }
                            throw error;
                        });
                    })
            );
        } else {
            e.respondWith(
                fetch(clonedRequestForFetch).catch(async (error) => {
                    // Use clonedRequestForSerialization for serialization since it's a read operation
                    const serialized = await serializeRequest(clonedRequestForSerialization);
                    requestQueue.push(serialized);

                    self.registration.sync.register("sendQueue");
                    return new Response(JSON.stringify({ message: "Request queued" }), {
                        headers: { "Content-Type": "application/json" },
                    });
                })
            );
        }
    } else {
        e.respondWith(
            fetch(clonedRequestForFetch)
                .then((netResponse) => {
                    // Cache the response against the original request
                    const clonedResponse = netResponse.clone();
                    caches.open("dynamic").then((cache) => cache.put(e.request, clonedResponse));
                    return netResponse;
                })
                .catch(() => {
                    return caches.match(e.request);
                })
        );
    }
});

// Listen for the 'sync' event to resend queued requests
self.addEventListener("sync", (event) => {
    if (event.tag === "sendQueue") {
        event.waitUntil(
            Promise.all(
                requestQueue.map(async (serializedReq) => {
                    let { body, ...otherReqData } = serializedReq;
                    if (body) {
                        body = await base64ToBlob(body);
                    }

                    const req = new Request(serializedReq.url, {
                        ...otherReqData,
                        body: body,
                    });

                    return fetch(req).then((response) => {
                        if (response.ok) {
                            console.log(`Replayed request to ${req.url}`);
                            // If request was successful, remove it from the queue
                            requestQueue = requestQueue.filter((r) => r !== req);
                        }
                    });
                })
            )
        );
    }
});

async function serializeRequest(request) {
    console.log("Body Used?", request.bodyUsed);

    const headers = {};
    for (let entry of request.headers.entries()) {
        headers[entry[0]] = entry[1];
    }

    // Check if the request has a body and read it
    let body;
    if (request.method !== "GET" && request.method !== "HEAD") {
        body = await request.blob();
        // Convert blob to a base64 string for serialization
        body = await blobToBase64(body);
    }

    return {
        url: request.url,
        method: request.method,
        headers: headers,
        mode: request.mode,
        credentials: request.credentials,
        cache: request.cache,
        redirect: request.redirect,
        referrer: request.referrer,
        body: body,
    };
}

function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

function base64ToBlob(base64) {
    const byteString = atob(base64.split(",")[1]);
    const mimeString = base64.split(",")[0].split(":")[1].split(";")[0];
    const uint8Array = new Uint8Array(byteString.length);

    for (let i = 0; i < byteString.length; i++) {
        uint8Array[i] = byteString.charCodeAt(i);
    }

    return new Blob([uint8Array], { type: mimeString });
}
