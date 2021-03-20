class Finder {
	constructor() {
		this.this.lng = coordinates.lng;
		this.lat = coordinates.lat;
	}

	getLocation() {
		if (navigator.geolocation.getCurrentPosition) {
			navigator.geolocation.getCurrentPosition((coordinates) => {
				const coords = {
					lng: coordinates.longitude,
					lat: coordinates.latitude,
				};
				console.log(coords);
			});
		}
	}
}

export default Finder;
