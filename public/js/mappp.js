
function initMap() {

    var myLatLng = {
        lat: 4.827554, lng: 7.375509};

    var locations = [
        ['ZitadelMedics PortHarcourt', 4.811057, 7.049831, 2],
        ['ZitadelMedics Uyo', 5.006240, 7.956252, 3]
      ];
    
     var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: myLatLng
    });

    var infowindow =  new google.maps.InfoWindow({});
    var marker, count;
    for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[count][1], locations[count][2]),
          map: map,
          title: locations[count][0]
        });
    google.maps.event.addListener(marker, 'click', (function (marker, count) {
          return function () {
            infowindow.setContent(locations[count][0]);
            infowindow.open(map, marker);
          }
        })(marker, count));
      }
}



