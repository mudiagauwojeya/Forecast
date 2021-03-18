import css from "./css/app.scss";

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
			});
	});
}

class App {
	constructor() {
		this.weather;
	}

	init() {}
}

const app = new App();
app.init();
