

//as document loads this function will initialize, retrieving the lat and long coordinates from the navigator
$(document).ready(function () {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (p) {
            var latitude = p.coords.latitude;
            var longitude = p.coords.longitude;
            var position = latitude + "," + longitude; // from this we have determined the coordinates from the browser and made them a string, which we can pass into the url. 

            console.log(position); //logging the position to the console in order to verify that function is working

            var url = "https://www.google.com/maps/embed/v1/view?center="+position+"&zoom=14&key=AIzaSyDs--vVtRh3_b44YkAcNtzhQ_BrgJdpat4";
            $("iframe").attr('src',url); //this generates the map supplying the empty src attribute with the url plus string coordinates
        })
        function initMap(){
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 7,
                center: {position},
            });
            }
        }
})
/*  The following code is from google documentation, trying to get a search bar to show up in the map. I'm usure if it isn't working because the map I currently have is embedded, or for some other reason. 
function initAutocomplete() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
      mapTypeId: "roadmap",
    });
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });
    let markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
  
      if (places.length == 0) {
        return;
      }
      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      places.forEach((place) => {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );
  
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }
/*  var geolocate = function(coordinates) {
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (p) {
        var latitude = p.coords.latitude;
        var longitude = p.coords.longitude;
        var position = latitude + "," + longitude;
        var url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=walmart&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@"+position+"&key=AIzaSyDs--vVtRh3_b44YkAcNtzhQ_BrgJdpat4";
       $("iframe").attr('src',url);

    })}
    };
*/
