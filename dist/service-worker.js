//Service Worker

const cacheName = "sw_v2";
const precacheFiles = [
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
});

self.addEventListener("fetch", (event) => {
	//service worker intercepting fetch request
	console.log(event);
});
