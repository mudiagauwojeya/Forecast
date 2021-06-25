class Finder {
	getUserLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(positionSuccess) => {
					const coordinates = {
						lng: positionSuccess.coords.longitude,
						lat: positionSuccess.coords.latitude,
					};
					console.log(coordinates);
					return coordinates;
				},
				(positionFailure) => {
					console.log(positionFailure);
				}
			);
		}
		// console.log(coordinates);
	}
}

export default Finder;
