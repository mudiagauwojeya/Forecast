//Service Worker
let versionNumber = 0;
const cacheName = `sw_v${versionNumber}`;
const precacheFiles = [
	"/",
	"index.html",
	"./assets/scripts/styles.css",
	"./assets/scripts/bundle.js",
];

self.addEventListener("install", (event) => {
	//install service-worker
	versionNumber++;
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
	event.respondWith(
		caches.match(request).then(
			(response) =>
				response ||
				fetch(request).then((fetchRes) => {
					caches
						.open(cacheName)
						.then((cache) => {
							cache.put(request, fetchRes.clone());
							return fetchRes;
						})
						.catch((error) => {
							console.log(error);
						});
				})
		)
	);
});
