//as document loads this function will initialize, retrieving the lat and long coordinates from the navigator
$(document).ready(function () {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (p) {
            var latitude = p.coords.latitude;
            var longitude = p.coords.longitude;
            var position = latitude + "," + longitude;

            $("#latitude").text(latitude);
            $("#longitude").text(longitude);

            console.log(position);

            var url = "https://www.google.com/maps/embed/v1/view?center="+position+"&zoom=14&key=AIzaSyDs--vVtRh3_b44YkAcNtzhQ_BrgJdpat4";
            $("iframe").attr('src',url);
        })
        function initMap(){
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 7,
                center: {position},
            });
            }
        }
})

var request = {
    location: position,
    radius: 9000,
    types:['meal_delivery']
};

var places = new google.maps.places.PlaceService(map);

places.nearbySearch(request, callback);

 var url2="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+position+"&radius=1500&type=restaurant&keyword="+request+"&key=AIzaSyDs--vVtRh3_b44YkAcNtzhQ_BrgJdpat4";


/*var getOutput = function(store) {
    var store = formInput;
    var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+position+"&radius=1500&type=restaurant&keyword="+formInput+"&key=AIzaSyDs--vVtRh3_b44YkAcNtzhQ_BrgJdpat4";
    fetch(url).then(console.log("done"));
}

//listening for button click
getInfoEl.addEventListener("click", getOutput)*/