//Service Worker

const cacheName = "sw_v1";
const precacheFiles = ["./index.html", "./assets/css/*", "./assets/scripts/*"];

self.addEventListener("install", (event) => {
	//install service-worker
	console.log(event, "Service worker is installed");
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
	console.log(event, "service worker is activated");
});

self.addEventListener("fetch", (event) => {
	//service worker intercepting fetch request
	console.log(event);
});
