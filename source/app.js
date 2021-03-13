//service worker
if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		//register service worker
		navigator.serviceWorker
			.register("/service-worker.js")
			.then((registered) => console.log(registered));
	});
}
console.log("Hello");
