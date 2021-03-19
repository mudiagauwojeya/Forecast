//Service Worker
const cacheName = "sw_v1.10.5";
const precacheFiles = [
	"/",
	"index.html",
	"weather.html",
	"./assets/scripts/app.css",
	"./assets/scripts/weather.css",
	"./assets/scripts/app.js",
	"./assets/scripts/weather.js",
];

self.addEventListener("install", (event) => {
	//install service-worker
	event.waitUntil(
		caches
			.open(cacheName)
			.then((cache) => cache.addAll(precacheFiles))
			.catch((err) => {
				const error = err.message;
				throw error;
			})
	);
	self.skipWaiting();
});

self.addEventListener("activate", (event) => {
	//service worker is activated
	event.waitUntil(
		caches.keys().then((keys) => {
			keys.forEach((key) => {
				if (key !== cacheName) {
					caches.delete(key);
				}
			});
		})
	);
	clients.claim();
});

self.addEventListener("fetch", (event) => {
	//service worker intercepting fetch request
	const request = event.request;
	event.respondWith(caches.match(request).then((response) => response));
});
