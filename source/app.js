import css from "./css/app.scss";
import Finder from "./components/finder";
import { Weather } from "./components/weather";

// window.addEventListener("DOMContentLoaded", () => {
// 	console.log("loaded");
// 	// service worker
// 	if ("serviceWorker" in navigator) {
// 		//register service worker
// 		navigator.serviceWorker
// 			.register("/service-worker.js")
// 			.then(() => {
// 				return;
// 			})
// 			.catch((err) => {
// 				const error = { message: err.message };
// 				console.log(error.message);
// 			});
// 	}
// });

class App {
	constructor() {
		this.weatherForm = document.getElementById("weather");
	}

	init() {
		const getStartedBtn = document.getElementById("getStartedBtn");
		const weatherLocationBtn = document.getElementById("weatherLocationBtn");

		// const options = {
		// 	root: null,
		// 	rootMargin: "0px 0px -200px 0px",
		// 	threshold: 0.05,
		// };

		// const fadeIn = (elements) => {
		// 	elements.forEach((element) => {
		// 		if (element.isIntersecting) {
		// 			element.target.classList.add("active");
		// 		} else {
		// 			element.target.classList.remove("active");
		// 		}
		// 	});
		// };

		// let observer = new IntersectionObserver(fadeIn, options);
		// observer.observe(document.querySelectorAll(".lorem"));

		getStartedBtn.addEventListener("click", () => {
			const section = document.querySelector("section");
			section.classList.remove("hidden");
			section.scrollIntoView(true, { behavior: "smooth" });
			this.weatherForm.weatherCity.focus();
		});

		this.validateInput();

		this.weatherForm.addEventListener("submit", (event) => {
			event.preventDefault();
			this.getCity();
		});
		weatherLocationBtn.addEventListener(
			"click",
			this.getUserCoordinates.bind(this)
		);
	}

	validateInput() {
		const userInput = this.weatherForm.weatherCity;
		userInput.addEventListener("keyup", (e) => {
			if (
				userInput.value.trim() === "" ||
				userInput.value.trim().length < 2
			) {
				userInput.style.backgroundColor = "#fda2a2";
			} else {
				userInput.style.backgroundColor = "#94ff94";
			}
		});
	}

	clearValidateStyle() {
		const userInput = this.weatherForm.weatherCity;
		userInput.style.backgroundColor = "";
	}

	getCity() {
		const cityName = this.weatherForm.weatherCity.value.trim();
		if (cityName === "" || cityName.length < 2) {
			alert("Please enter a city name to continue");
			return;
		}
		console.log(`Searching for ${cityName}`);
		this.clearValidateStyle();
		this.weatherForm.reset();
	}

	getUserCoordinates() {
		const finder = new Finder();
		finder.getUserLocation();
	}
}

const app = new App();
app.init();
