import css from "./css/app.scss";

// service worker
if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		//register service worker
		navigator.serviceWorker
			.register("/service-worker.js")
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

const options = {
	root: null,
	rootMargin: "0px 0px -200px 0px",
	threshold: 0.05,
};

let observer = new IntersectionObserver(fadeIn, options);
document.querySelectorAll(".lorem").forEach((lorem) => {
	observer.observe(lorem);
});

function fadeIn(elements) {
	elements.forEach((element) => {
		if (element.isIntersecting) {
			element.target.classList.add("active");
		} else {
			element.target.classList.remove("active");
		}
	});
}
