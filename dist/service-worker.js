//Service Worker

const cacheName = "sw_v1";
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
		caches.match(request).then((response) => {
			return (
				response ||
				fetch(request).then((response) => {
					caches
						.open(cacheName)
						.then((cache) => {
							cache.put(request, response.clone());
							return response;
						})
						.catch((err) => console.log(err.message));
				})
			);
		})
	);
});