

$(document).ready(function(){// *** jQuery section *** //

    
    $('.sidenav').sidenav();

    // *** Alexis/Anagha Google API ***

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (p) {
            var latitude = p.coords.latitude;
            var longitude = p.coords.longitude;
            var position = latitude + "," + longitude; // from this we have determined the coordinates from the browser and made them a string, which we can pass into the url. 

            console.log(position); //logging the position to the console in order to verify that function is working

            var url = "https://www.google.com/maps/embed/v1/view?center="+position+"&zoom=14&key=AIzaSyDs--vVtRh3_b44YkAcNtzhQ_BrgJdpat4";
            $("iframe").attr('src',url); //this generates the map supplying the empty src attribute with the url plus string coordinates
        });
        function initMap(){
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 7,
                center: {position},
            });
            };
        };
    
    // *** End of Alexis/Anagha Google API ***


});


// *** Links to videos *** //

let videosContainerEl = document.querySelector("#test123")


var videoClicked = function(event) {

    event.preventDefault();
    var videoLinkSelected = videosContainerEl.value;
    //var videoLinkSelected = videosContainerEl.innerHTML;

    if (!videoLinkSelected) {
        // Do nothing
    } else {
    switch (videoLinkSelected) {
        case "inspirational":
           // window.open("https://www.youtube.com/watch?v=qWtdWXpmlKs", '_blank');
           // Simulate a mouse click:
          //  window.location.href = "https://www.youtube.com/watch?v=qWtdWXpmlKs";
            window.open("https://www.youtube.com/watch?v=qWtdWXpmlKs");
            break;
        case "how germs spread":
            //window.location.href = "https://www.youtube.com/watch?v=JD85FDlxqCs";
            window.open("https://www.youtube.com/watch?v=JD85FDlxqCs");
            break;
        case "keep it clean":
            window.location.href = "https://www.youtube.com/watch?v=5JYhm9oa-DM";
            break;
        case "quarantine":
            window.location.href = "https://www.youtube.com/watch?v=fqRh6wscMMI";
            break;
        case "funny":
            window.location.href = "https://www.youtube.com/watch?v=DODLEX4zzLQ";
            break;
          }
        }
    
}


videosContainerEl.addEventListener("change", videoClicked);


// var instance = M.FormSelect.getInstance(elem);

// instance.getSelectedValues();


// document.addEventListener('DOMContentLoaded', function() {
// var elems = document.querySelectorAll('select');
// var instances = M.FormSelect.init(elems, options);
// });

// *** Anagha's Section for Jokes API *** //

//define global variables
var buttonEl = document.querySelector("#clickme");
var jokeDivEl = document.querySelector(".joke");
//load on pageload
document.addEventListener("DOMContentLoaded", displayJock);

//function to load a random joke data
async function displayJock() {
try
  {
  var jokeUrl = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"}
    })
    //wait till response is ok
    var jokeObj = await jokeUrl.json();
    jokeDivEl.innerHTML = jokeObj.joke;
  }
  catch(err)
  {
    console.log(err);
  }
};

//load more jokes on click of click me button
buttonEl.addEventListener("click", displayJock);

// *** End of Anagha's Section for Jokes API *** //


// *** Start of Raj's Inspirational Quotes API *** //

var quoteApiUrl = "https://type.fit/api/quotes";
var inspoDivEl = document.querySelector("#inspo-refresh");

var getQuotes = function () {
  fetch(quoteApiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        var randIndex = Math.floor(Math.random() * 100);
        var quote = data[randIndex].text;
        var authorName = data[randIndex].author;
        // Place text onto HTML page
        document.getElementById("quote-display").textContent =
          "'" + quote + "'";
        document.getElementById("author-display").textContent =
          "- " + authorName;
      });
    }
  });
};

//run function on load to prepopulate quote
getQuotes();
//event listener to load more quotes
inspoDivEl.addEventListener("click", getQuotes);

// *** End of Raj's Inspirational Quotes API *** //


// *** Alexis/Anagha Google Map API *** //

//get nearby grocery stores
function getstores(lat,lon)
  {
    var groceryapirl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+lat+","+lon+"&radius=5000&type=supermarket&key=AIzaSyDs--vVtRh3_b44YkAcNtzhQ_BrgJdpat4";
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

// *** End of Alexis/Anagha Google Map API *** //




// *** Kris Section for Cities API *** //

var areaSelectEl = document.querySelector("#area-select");
var canadaRecoveredEl = document.querySelector("#CArecovered");
var canadaVaccinatedEl = document.querySelector("#CAvaccinated");
var canadaRecoveredNewEl = document.querySelector("#CArecoverednew");
var canadaVaccineNewEl = document.querySelector("#CAvaccinatednew");
var areaStatsEl = document.querySelector("#area-stats");


//get data for selected area
var getAreaData = function(area) {
  var areaSearchUrl = "https://api.opencovid.ca/summary?loc=" + area;
  
  fetch(areaSearchUrl).then(function(response) {
    response.json().then(function(data) {
      //console.log(data);
      displayAreaData(data);
    })
  })
}


//update stats when selection changes
var areaSelectHandler  = function(event) {
  event.preventDefault();
  var areaCode = areaSelectEl.value;
  //console.log(areaCode);
  getAreaData(areaCode);
}

//get Canada wide stats and display them
var getCanadaData = function() {
  fetch("https://api.opencovid.ca").then(function(response) {
    response.json().then(function(data) {
      // console.log(data);
      var caRecovered = data.summary[0].cumulative_recovered;
      var caVaccinated = data.summary[0].cumulative_avaccine;
      var caRecoveredNew = data.summary[0].recovered;
      var caVaccinatedNew = data.summary[0].avaccine;
      canadaRecoveredEl.textContent = caRecovered;
      canadaVaccinatedEl.textContent = caVaccinated;
      canadaRecoveredNewEl.textContent = caRecoveredNew;
      canadaVaccineNewEl.textContent = caVaccinatedNew
    })
  })
}

var displayAreaData = function(data) {
    // create data variables
    var areaName = data.summary[0].province;
    var areaRecoveredNew = data.summary[0].recovered;
    var areaRecovered = data.summary[0].cumulative_recovered;
    var areaVaccineNew = data.summary[0].avaccine;
    var areaVaccinated = data.summary[0].cumulative_avaccine;
    
    //clear old data
    areaStatsEl.textContent = ""
    
    //create stat title element
    var areaTitleEl = document.createElement("p");
    areaTitleEl.classList.add("btn", "btn-city", "green", "accent-4");
    areaTitleEl.textContent = areaName + " Stats";
    areaStatsEl.appendChild(areaTitleEl);
  
    //create new recoveries element
    var newRecoveriesEl = document.createElement("p");
    newRecoveriesEl.classList = ("btn btn-city waves-effect waves-light") ;
    newRecoveriesEl.textContent = "New Recoveries: " + areaRecoveredNew;
    areaStatsEl.appendChild(newRecoveriesEl);
  
    //create total recoveries element
    var totalRecoveriesEl = document.createElement("p");
    //totalRecoveriesEl.classList.add("btn", "btn-city");
    totalRecoveriesEl.classList = ("btn btn-city waves-effect waves-light") ;
    totalRecoveriesEl.textContent = "Total Recovered: " + areaRecovered;
    areaStatsEl.appendChild(totalRecoveriesEl);
  
    //create new vaccinations element
    var newVaccinationsEl = document.createElement("p");
    //newVaccinationsEl.classList.add("btn", "btn-city");
    newVaccinationsEl.classList = ("btn btn-city waves-effect waves-light") ;
    newVaccinationsEl.textContent = "New Vaccinations: " + areaVaccineNew;
    areaStatsEl.appendChild(newVaccinationsEl);
  
    //create total vaccinations element
    var totalVaccinationsEl = document.createElement("p");
    //totalVaccinationsEl.classList.add("btn", "btn-city");
    totalVaccinationsEl.classList = ("btn btn-city waves-effect waves-light") ;
    totalVaccinationsEl.textContent = "Total Vaccinations: " + areaVaccinated;
    areaStatsEl.appendChild(totalVaccinationsEl); 
  }


//document.addEventListener('DOMContentLoaded', function() {
//  var elems = document.querySelectorAll('select');
//  var instances = M.FormSelect.init(elems, options);
//});

areaSelectEl.addEventListener("change", areaSelectHandler);


getCanadaData();

// *** End Kris Section for Cities API *** //