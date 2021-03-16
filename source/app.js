import css from "./app.css";

//service worker
if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		//register service worker
		navigator.serviceWorker
			.register("/service-worker.js", {
				scope: "/",
			})
			.then(() => {
				return;
			})
			.catch((err) => {
				const error = { message: err.message };
				console.log(err);
				throw error;
			});
	});
}

class App {
	constructor() {}

	init() {}
}

const app = new App();
app.init();
