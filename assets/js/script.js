

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

// *** Dynamic chat container - to be added when node js is avaialable *** //




// Options the user could type in
const prompts = [
  ["hi", "hey", "hello","hi there"], 
  ["good morning"], ["good afternoon"],["good night"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what did you eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"]
]

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!"],
  ["good morning"], ["good afternoon"],["good night"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["My name is ......"],
  ["Same here..."],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["This site has really good section to read jokes"],  
  ["Bye", "Goodbye", "See you later"],
  ["Salad", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Sorry didn't get you"],
  ["Haha!","Good one!"]
]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Sorry I don't understand :/",
  "Try again",
  "I'm listening..."    
]

// any other responses for covid word found

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I have COVID", "These are uncertain times",
                     "Need to take precautions"]


//get input on keyenter event
document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  // Element of clicked chat button
  var chatBtnEl = document.querySelector("#chat-button");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });

    var chatClicked = function (event) {
      let input = inputField.value;
      inputField.value = "";
      output(input);
  }

  chatBtnEl.addEventListener("click", chatClicked);

});

function output(input) {
  let product;

  // Regex remove non word/space chars
  // Trim trailing whitespce
  // Remove digits - not sure if this is best
  // But solves problem of entering something like 'hi1'

 
  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (compare(prompts, replies, text)) { 
    // Search for exact match in `prompts`
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } else if (text.match(/(corona|covid|virus)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else {
    // If all else fails: random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  // Update DOM
  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let user1Div = document.createElement("div");
  user1Div.id = "user";
  user1Div.className = "user response";
  user1Div.innerHTML = `<img src="./assets/images/user.png" class="userimg"><span>${input}</span>`;
  messagesContainer.appendChild(user1Div);

  let user2Div = document.createElement("div");
  let user2Img = document.createElement("img");
  let user2Text = document.createElement("span");
  user2Div.id = "user2";
  user2Div.className = "response";
  user2Img.src = "./assets/images/user1.png";
  user2Img.className = "userimg";   
  user2Text.className = "typing";
  user2Text.innerText = "Typing...";
  user2Div.appendChild(user2Text);
  user2Div.appendChild(user2Img);
  messagesContainer.appendChild(user2Div);
  

  // Fake delay to seem "real"
  setTimeout(() => {
    user2Text.innerText = `${product}`;    
  }, 2000
  )

}

// *** End of chat container - to be added when node js is avaialable *** //



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