import css from "./css/app.scss";
import Finder from "./components/finder";

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
				console.log(error);
			});
	});
}

class App {
	constructor() {}

	init() {
		const getStartedBtn = document.getElementById("getStartedBtn");

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

		getStartedBtn.addEventListener(
			"click",
			this.getUserCoordinates.bind(this)
		);
	}

	getUserCoordinates() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(success) => {
					const coordinates = {
						lng: success.coords.longitude,
						lat: success.coords.latitude,
					};
					const finder = new Finder();
					finder.getUserLocation(coordinates);
				},
				(error) => {
					console.log(error);
				}
			);
		}
	}
}

const app = new App();
app.init();
