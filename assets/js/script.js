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


