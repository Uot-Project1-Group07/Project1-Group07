

$(document).ready(function() { // Wait for the DOM to be ready for window., javascript/jquery and others

    // Menu example

    $(document).ready(function(){
        $('.sidenav').sidenav();
      });
        
      



        alert(
        $('#select')
        .dropdown('get value')
        );

let citiesContainerEl = document.querySelector("#test123")

console.log("container EL Found " + citiesContainerEl)
  

// Funciton to handle the event from the list of cities when clicked.
var cityClicked = function (event) {

    let citySelectredDropDownEl = 
    $('#select')
    .dropdown('get value')

    if (citySelectredDropDownEl == "Gender") {
        // Do nothing
    } else {

    alert(citySelectredDropDownEl);

    $('#select')
    .dropdown('restore defaults')

    $('#select')
    .dropdown('clear')
   
    }

    //let cityClicked = event.target.getAttribute("data-city")
    // if (cityClicked){
    //     //getWeatherData(event, cityClicked);
    //     alert(cityClicked)
    // } else { // If the value is empty, it should not happen but it is a failsafe.
    //     alert(cityClicked)
    //     alert("Internal erro found, please email esroleo@gmail.com.\nPlease provide story of issue in order for it to be fixed");
    // };
};



// Event listener for the cities incase they are clicked.
//citiesListContainerEl.addEventListener("click",  cityClicked);
citiesContainerEl.addEventListener("click", cityClicked)




});
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
  var areaTitleEl = document.createElement("h6");
  areaTitleEl.textContent = areaName + " Stats";
  areaStatsEl.appendChild(areaTitleEl);

  //create new recoveries element
  var newRecoveriesEl = document.createElement("p");
  newRecoveriesEl.textContent = "New Recoveries: " + areaRecoveredNew;
  areaStatsEl.appendChild(newRecoveriesEl);

  //create total recoveries element
  var totalRecoveriesEl = document.createElement("p");
  totalRecoveriesEl.textContent = "Total Recovered: " + areaRecovered;
  areaStatsEl.appendChild(totalRecoveriesEl);

  //create new vaccinations element
  var newVaccinationsEl = document.createElement("p");
  newVaccinationsEl.textContent = "New Vaccinations: " + areaVaccineNew;
  areaStatsEl.appendChild(newVaccinationsEl);

  //create total vaccinations element
  var totalVaccinationsEl = document.createElement("p");
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