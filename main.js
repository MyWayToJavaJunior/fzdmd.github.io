$(document).ready(function(e) {
	    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
});

            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(55.4231097, 37.7646842), // Domodedovo

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{featureType:'all',stylers:[{saturation:-100},{gamma:0.50}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

            };

/***************** Smooth Scrolling ******************/

$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});

});

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '100%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInRight');
	}, {
		offset: '100%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInUp');
	}, {
		offset: '100%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '100%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '100%'
	});

});
