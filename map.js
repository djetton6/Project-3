  function initMap() {
    var vegas = {lat: 36.210, lng: -115.1145};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: vegas
    });
    var marker = new google.maps.Marker({
      position: vegas,
      map: map
    });
  }
