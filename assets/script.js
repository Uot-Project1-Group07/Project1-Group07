var citySelectEl = document.querySelector("#city-select");
var canadaRecoveredEl = document.querySelector("#CArecovered");
var canadaVaccinatedEl = document.querySelector("#CAvaccinated");
var canadaRecoveredNewEl = document.querySelector("#CArecoverednew");
var canadaVaccineNewEl = document.querySelector("#CAvaccinatednew");

var getCityData = function(city) {
  var citySearchUrl = "https://api.opencovid.ca/summary?loc=" + city;
  
  fetch(citySearchUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    })
  })
}

var regionSelectHandler  = function(event) {
  event.preventDefault();
  var cityCode = citySelectEl.value;
  console.log(cityCode);
  getCityData(cityCode);
}

var getCanadaData = function() {
  fetch("https://api.opencovid.ca").then(function(response) {
    response.json().then(function(data) {
      console.log(data);
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


//document.addEventListener('DOMContentLoaded', function() {
//  var elems = document.querySelectorAll('select');
//  var instances = M.FormSelect.init(elems, options);
//});

citySelectEl.addEventListener("change", regionSelectHandler);

getCityData(3595);
getCanadaData();
