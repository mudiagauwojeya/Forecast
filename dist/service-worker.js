//Service Worker

const cacheName = "sw_v5";
const precacheFiles = [
	"/",
	"index.html",
	"./assets/css/style.css",
	"./assets/scripts/bundle.js",
];

self.addEventListener("install", (event) => {
	//install service-worker
	event.waitUntil(
		caches
			.open(cacheName)
			.then((cache) => {
				return cache.addAll(precacheFiles);
			})
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
	self.clients.claim();
});

self.addEventListener("fetch", (event) => {
	//service worker intercepting fetch request
	const request = event.request;
	event.respondWith(
		caches
			.open(cacheName)
			.then((cache) => {
				cache.match(request).then((response) => response);
			})
			.catch(() => {
				fetch(request).then((response) => {
					const resClone = response.clone();
					cache.put(request, resClone);
					return response;
				});
			})
	);
});
