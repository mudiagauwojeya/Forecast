//service worker
if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		//register service worker
		navigator.serviceWorker
			.register("/service-worker.js", {
				scope: "/",
			})
			.then((registered) => console.log(registered))
			.catch((err) => {
				const error = { message: err.message };
				console.log(err);
				throw error;
			});
	});
}
console.log("Hello");
