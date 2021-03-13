//Service Worker
self.addEventListener("install", (event) => {
	//install service-worker
	console.log(event, "Service worker is installed");
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
