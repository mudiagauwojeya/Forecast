class Weather {
	constructor(coordinates) {
		this.lng = coordinates.lng;
		this.lat = coordinates.lat;
	}

	getWeatherReport() {
		console.log(`Getting weather data for ${this.lng} and ${this.lat}`);
	}
}

export { Weather };
