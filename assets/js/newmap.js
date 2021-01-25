
//get nearby grocery stores
function getstores(lat,lon)
  {
    var groceryapirl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+lat+","+lon+"&radius=500&type=supermarket&key=AIzaSyDs--vVtRh3_b44YkAcNtzhQ_BrgJdpat4";
    fetch(groceryapirl).then(function(response) 
    {
      if (response.ok) {
        response.json().then(function(data) {
          
          //Store1 data 
            var nm = data.results[0].name;  
            //var la = data.results[0].geometry.location.lat;
            //var ln =  data.results[0].geometry.location.lng;
            var oepnstore = data.results[0].opening_hours.open_now;
            var ratingstore = data.results[0].rating;
            var addressstore = data.results[0].vicinity;
            console.log(nm,oepnstore,ratingstore,addressstore);
            if(oepnstore===true)
            {
            oepnstore="Open now";
            }
            else
            {
              oepnstore="Closed";
            }
           
            var storeEl = document.querySelector(".store1");
            var addressstore = data.results[0].vicinity;
            storeEl.innerHTML = "Name :"+nm+"</br>"+"Open hours: "+oepnstore+"</br>"+"Store Ratings: "+ratingstore+"</br>"+"Address: "+addressstore+"</br";

            //store2 data
            var nm = data.results[1].name;  
            //var la = data.results[1].geometry.location.lat;
            //var ln =  data.results[1].geometry.location.lng;
            var oepnstore = data.results[1].opening_hours.open_now;
            var ratingstore = data.results[1].rating;
            var addressstore = data.results[1].vicinity;
            if(oepnstore===true)
            {
            oepnstore="Open now";
            }
            else
            {
              oepnstore="Closed";
            }

            var storeEl = document.querySelector(".store2");
            storeEl.innerHTML = "Name :"+nm+"</br>"+"Open hours: "+oepnstore+"</br>"+"Store Ratings: "+ratingstore+"</br>"+"Address: "+addressstore+"</br";
                                                   
              
        })        
      } 
      else
      {
        console.log("Error: " + response.statusText);
      }
    })
    .catch(function(error) {
      console.log("Error: " + response.statusText);
  });  
  };

   

//as document loads this function will initialize, retrieving the lat and long coordinates from the navigator
$(document).ready(function ()
 {
    //localStorage.clear();
    if ("geolocation" in navigator)
    {
        navigator.geolocation.getCurrentPosition(function (p) {
           
            var latitude = p.coords.latitude;
            var longitude = p.coords.longitude;
            var position = latitude + "," + longitude; // from this we have determined the coordinates from the browser and made them a string, which we can pass into the url. 
            getstores(latitude,longitude);
            })          
              
    }
    else
    {
        console.log("location is blocked");
    }
});
