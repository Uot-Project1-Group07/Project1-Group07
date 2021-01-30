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
      displayAreaData(data);
    })
  })
}


//update stats when selection changes
var areaSelectHandler  = function(event) {
  event.preventDefault();
  var areaCode = areaSelectEl.value;
  getAreaData(areaCode);
}

//get Canada wide stats and display them
var getCanadaData = function() {
  fetch("https://api.opencovid.ca").then(function(response) {
    response.json().then(function(data) {      
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
  var areaTitleEl = document.createElement("h5");
  areaTitleEl.classList.add("card-title", "green", "accent-4");
  areaTitleEl.textContent = areaName + " Stats";
  areaStatsEl.appendChild(areaTitleEl);

  //create stat card panel
  var statPanelEl = document.createElement("div");
  statPanelEl.classList.add("card-panel", "teal", "lighten-1");
  areaStatsEl.appendChild(statPanelEl);

  //create new recoveries element
  var newRecoveriesEl = document.createElement("p");  
  newRecoveriesEl.textContent = "New Recoveries: " + areaRecoveredNew;
  statPanelEl.appendChild(newRecoveriesEl);

  //create total recoveries element
  var totalRecoveriesEl = document.createElement("p");  
  totalRecoveriesEl.textContent = "Total Recovered: " + areaRecovered;
  statPanelEl.appendChild(totalRecoveriesEl);

  //create new vaccinations element
  var newVaccinationsEl = document.createElement("p");  
  newVaccinationsEl.textContent = "New Vaccinations: " + areaVaccineNew;
  statPanelEl.appendChild(newVaccinationsEl);

  //create total vaccinations element
  var totalVaccinationsEl = document.createElement("p");  
  totalVaccinationsEl.textContent = "Total Vaccinations: " + areaVaccinated;
  statPanelEl.appendChild(totalVaccinationsEl); 
}



areaSelectEl.addEventListener("change", areaSelectHandler);


getCanadaData();
