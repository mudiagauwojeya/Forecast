class Finder {
	getCoordinates() {
		let coords;
		if (navigator.geolocation.getCurrentPosition) {
			navigator.geolocation.getCurrentPosition(
				(success) => {
					coords = {
						lng: success.coords.longitude,
						lat: success.coords.latitude,
					};
				},
				(error) => {
					console.log(error);
				}
			);
		}
		return coords;
	}
}

export default Finder;
