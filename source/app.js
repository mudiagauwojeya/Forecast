import css from "./css/app.scss";
import Finder from "./components/finder";

window.addEventListener("load", () => {
	console.log("loaded");
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
});

class App {
	constructor() {}

	init() {
		const weatherForm = document.getElementById("weather-form");
		// const searchByCityBtn = document.getElementById("search-city-btn");
		const geolocationBtn = document.getElementById("geolocation-btn");

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

		weatherForm.addEventListener("submit", (event) => {
			event.preventDefault();
			this.getCity(event);
		});
		geolocationBtn.addEventListener(
			"click",
			this.getUserCoordinates.bind(this)
		);
	}

	getCity(event) {
		console.log(event);
		const cityName = event.target.weatherCity.value.trim();
		if (cityName === "" || cityName.length < 2) {
			alert("Please enter a city name to continue");
			return;
		}

		console.log(`Searching for ${cityName}`);
		event.target.reset();
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
