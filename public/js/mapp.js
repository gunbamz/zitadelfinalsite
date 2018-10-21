function initMap(){
    // Map options
    var myLatLng = {
      lat: 9.111011, lng: 7.414441};

    // New map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng
    });
    
    var marker = new google.maps.Marker({
        position:{lat:9.111011,lng:7.414441},
        map:map,
        title: 'ZitadelMedics Abuja'
    });

}