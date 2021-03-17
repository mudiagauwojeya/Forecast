import css from "./weather.scss";

class Weather {
	constructor(coordinates) {
		this.lng = coordinates.lng;
		this.lat = coordinates.lat;
	}
}
