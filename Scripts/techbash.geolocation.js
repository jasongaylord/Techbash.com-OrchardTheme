var geocoder, location1, location2, gDir;

// ******************************************************************************************
// Begin HTML 5 Geolocation functions
// ******************************************************************************************

function showDistance() {
	if (Modernizr.geolocation) {
		// show how many driving miles you are from the conference
		navigator.geolocation.getCurrentPosition(getLocation,handleLocationError);
	} else {
		// just show the travel label
	}
}

function getLocation(position)
{
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	
	calculateRoute(latitude, longitude);
}

function handleLocationError(err)
{
	if (err.code == 1) {
		// user won't grant permission
	}
	
	if (err.code == 2) {
		// position is currently unavailable
	}
	
	if (err.code == 3) {
		// a timeout has occurred
	}
}

// ******************************************************************************************
// End HTML 5 Geolocation functions
// ******************************************************************************************

function adjustTime(minutes)
{
	if ((minutes/ 60) > 59) {
		
	} else {
	
	}
}


// ******************************************************************************************
// Begin Google functions
// ******************************************************************************************
var directionsService = new google.maps.DirectionsService();

function calculateRoute(lat, lon) {
	var distance = 0;
	var duration = 0;
	var start = new google.maps.LatLng(lat, lon);
	var end = new google.maps.LatLng(41.195647, -75.992499);
	var request = {origin:start, destination:end, travelMode: google.maps.DirectionsTravelMode.DRIVING};
	
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			distance = response.routes[0].legs[0].distance.value;
			duration = response.routes[0].legs[0].duration.value;
			$(".travelStats").html(Math.round(distance / 1609.344) + "mi"); // | " + adjustTime(Math.round(duration / 60)));
			//$(".travelStats").html("Travel: " + (distance \ 1609.344) + " miles | " + (duration \ 60) + " minutes");
		} else {
			// TODO: Handle the Google Maps exception
		}
	});
}
// ******************************************************************************************
// End Google functions
// ******************************************************************************************

$(document).ready(function() { showDistance(); });
