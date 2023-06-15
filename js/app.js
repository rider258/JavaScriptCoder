 function initMap() {
    const coord = { lat:4.6482785 ,lng:-74.2722783};
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord,
    });
    var marker = new google.maps.Marker({
            position: coord,
            map: map,

    });
    
}
 window.initMap = initMap; 





