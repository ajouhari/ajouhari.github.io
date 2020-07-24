function initMap() {
    // The location
    var location = {lat: 21.4858, lng: 39.1925};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: location});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: location, map: map});
}