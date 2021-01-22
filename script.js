
var buttonClick = document.querySelector("#clicked");

//The area where the data is formed
var dateArea = document.querySelector("#dates_info");

var dates = function (){
    var day1 = document.createElement("li");
    day1.innerHTML = "1" + 
    "The first symptoms begin from two to 14 days after you have been exposed to the virus. A new study from Johns Hopkins Bloomberg School of Public Health suggests a median time of about five days.";
    dateArea.appendChild(day1);

    var day2 = document.createElement("li");
    day2.innerHTML = "2" + 
    "The average duration of fever was 12 days. Ninety-nine percent of the patients studied had a fever. About 50% felt fatigued and had a dry cough, with 33% having difficulty breathing and complaining of muscle pain.";
    dateArea.appendChild(day2);   
};


buttonClick.addEventListener("click",dates);
//disable the clicked button after once clicked
buttonClick.disabled = true;