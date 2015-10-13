$( document ).ready(function() {
    
    //google maps
    function initialize() {
        var location1 = new google.maps.LatLng('34.079112', '-118.475114');
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
            draggable: false,
            disableDefaultUI: false,
            
            center: new google.maps.LatLng('34.079112', '-118.475114'),
            zoom: 18,
            scrollwheel: false,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position: location1,
            map: map,
            // icon: { url: 'images/vector/mapMarkerIcon.svg' }
        });
    }
     google.maps.event.addDomListener(window, 'load', initialize);
     google.maps.event.addDomListener(window, "resize", function() {
        initialize();
    });


//------------------------------------
});
$(window).load(function(){
    $('.loading-overlay').fadeOut();
});