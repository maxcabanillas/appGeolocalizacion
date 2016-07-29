class UserLocation {
	constructor(callback) {
		//se ejecuta cuando creamos un nuevo objeto de esta clase

		if (navigator.geolocation) {
			//si tienen la api de geolocalizacion

			navigator.geolocation.getCurrentPosition(localizacion => {
				// esto se ejecuta cuando ya tenemos la localizacion

				this.latitude = localizacion.coords.latitude;
				this.longitude = localizacion.coords.longitude;

				callback();
			});
		} else {
			alert("tu navegador no soporta las funcionalidades de esta pagina");
		}
	}
}
