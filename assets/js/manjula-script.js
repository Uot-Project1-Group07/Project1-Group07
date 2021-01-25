
//The area where the data is formed
var dateArea = document.querySelector("#dates_info");  //ul element

const input = document.querySelector('input');  //date picker element

var daySelected; //to get and use the date
//creating 

var genDatesFromGiven = function(){
  
  //passing the date so we can generate the dates according to the date given

  var daySplit = (daySelected.split('-'));
  //console.log(daySplit);

  var d = new Date(parseInt(daySplit[0]), parseInt(daySplit[1])-1, parseInt(daySplit[2])); 
  //console.log("Initial date: " + d);
  //console.log("To get the date: " + d.getDate());

  var finalDate = new Date(d);

  var datesArray = [];

  for(var i=0; i<= 17; i++){    //starting in 1
    datesArray[i] = new Date(daySplit[0], daySplit[1]-1, finalDate.getDate() + i);
  }

  return datesArray;
};


var dates = function (){

    var arrDates = genDatesFromGiven();
    console.log(arrDates);
    console.log(arrDates[1].toDateString());

    var givenDate = document.createElement('h4');
    givenDate.setAttribute('text-align','right');
    givenDate.innerHTML = "<h4 style='text-align:center'>Covid contracted date you gave was <b>"+arrDates[0].toDateString()+"</b></h4><hr><br>";
    dateArea.appendChild(givenDate);

    //can I make an image pop out
    var covidProImage = document.createElement("img");
    covidProImage.setAttribute('text-align','center');  //center aligning not working for the image
    covidProImage.setAttribute('width','45%');
    covidProImage.setAttribute('src','./assets/images/progression-of-covid-19.webp');
    covidProImage.setAttribute('alt','');   // for proper coding form
    dateArea.appendChild(covidProImage);
    //source
    var covidProImageSource = document.createElement("p");
    covidProImageSource.textContent = "Source: CBC News";
    dateArea.appendChild(covidProImageSource);

    //citation
    var dataCitation = document.createElement('p');
    dataCitation.innerHTML = "<b>The following data is cited from Boston 25 news website: </b>" +
    "<a href='https://www.boston25news.com/news/trending/coronavirus-how-covid-19-progresses-day-by-day-breakdown-symptoms/YRC3CCK2NFD2THIYJHT35447AU/'>" +
    "Link here.</a><br>" ;
    dateArea.appendChild(dataCitation);


    var day1 = document.createElement("li");
    day1.setAttribute('list-style-type','none');       //NOT working
    day1.innerHTML = "<h5><b>"+ arrDates[0].toDateString()+ "</b></h5>" + "<h5p>" +
        "Most of those infected – 88% – will have a fever and feel tired. Many also have muscle pain and a dry cough." + "</p>" +
        "<p>Some people, around 10% according to the study from China, experience nausea or have diarrhea in the days just before the fever begins.</p>";
    dateArea.appendChild(day1);

    var day2to4 = document.createElement("li");
    day2to4.setAttribute('list-style-type','none');        //NOT working
    day2to4.innerHTML = "<h5><b>"+ arrDates[1].toDateString() + " to " + arrDates[3].toDateString()+ "</b></h5>" +   
    "<p>The average duration of fever was 12 days. Ninety-nine percent of the patients studied had a fever. About 50% felt fatigued and had a dry cough, with 33% having difficulty breathing and complaining of muscle pain.</p>";
    dateArea.appendChild(day2to4);    
    
    var day5 = document.createElement("li");
    day5.setAttribute('list-style-type','none');       //NOT working
    day5.innerHTML = "<h5><b>"+ arrDates[4].toDateString()+ "</b></h5>" + 
    "<p>The average duration of fever was 12 days. Ninety-nine percent of the patients studied had a fever. About 50% felt fatigued and had a dry cough, with 33% having difficulty breathing and complaining of muscle pain.</p>";
    dateArea.appendChild(day5);

    var day6 = document.createElement("li");
    day6.setAttribute('list-style-type','none');       //NOT working
    day6.innerHTML = "<h5><b>"+ arrDates[5].toDateString()+ "</b></h5>" + 
    "<p>Breathing difficulty, cough and fever persist. Some people describe chest tightening or having a feeling that a “band” is around their chest.</p>";
    dateArea.appendChild(day6);

    var day7 = document.createElement("li");
    day7.setAttribute('list-style-type','none');       //NOT working
    day7.innerHTML = "<h5><b>"+ arrDates[6].toDateString()+ "</b></h5>" + 
    "<p>Breathing difficulty, cough and fever persist. Some people describe chest tightening or having a feeling that a “band” is around their chest.</p>";
    dateArea.appendChild(day7);

    var day8 = document.createElement("li");
    day8.setAttribute('list-style-type','none');       //NOT working
    day8.innerHTML = "<h5><b>"+ arrDates[7].toDateString()+ "</b></h5>" + 
    "<p>Breathing difficulty, cough and fever persist. Some people describe chest tightening or having a feeling that a “band” is around their chest.</p>";
    dateArea.appendChild(day8);

    var day10 = document.createElement("li");
    day10.setAttribute('list-style-type','none');       //NOT working
    day10.innerHTML = "<h5><b>"+ arrDates[9].toDateString()+ "</b></h5>" + 
    "<p>Breathing difficulty, cough and fever persist. Some people describe chest tightening or having a feeling that a “band” is around their chest.</p>";
    dateArea.appendChild(day10);

    var day12 = document.createElement("li");
    day12.setAttribute('list-style-type','none');       //NOT working
    day12.innerHTML = "<h5><b>"+ arrDates[11].toDateString()+ "</b></h5>" + 
    "<p>Breathing difficulty, cough and fever persist. Some people describe chest tightening or having a feeling that a “band” is around their chest.</p>";
    dateArea.appendChild(day12);

    var day13to14 = document.createElement("li");
    day13to14.setAttribute('list-style-type','none');       //NOT working
    day13to14.innerHTML = "<h5><b>"+ arrDates[12].toDateString() + " to " + arrDates[13].toDateString() + "</b></h5>" + 
    "<p>Breathing difficulty, cough and fever persist. Some people describe chest tightening or having a feeling that a “band” is around their chest.</p>";
    dateArea.appendChild(day13to14);

    var day18 = document.createElement("li");
    day18.setAttribute('list-style-type','none');       //NOT working
    day18.innerHTML = "<h5><b>"+ arrDates[17].toDateString() + "</b></h5>" + 
    "<p>Breathing difficulty, cough and fever persist. Some people describe chest tightening or having a feeling that a “band” is around their chest.</p>";
    dateArea.appendChild(day18);
};

var instructions = document.querySelector('#dateInstructions');


var datePicker = function(e){
    
    daySelected = e.target.value;
    
    dates();

    //removing items used to get the date from the user
    input.hidden = true;
    instructions.hidden = true;
}

//Submit button
var submit = document.querySelector("#submitButton");

//user inputs
var user = document.getElementById('user');
var userComment = document.querySelector("#user_2");

//Create div.card. This inside it div.card-content
var commentArea = document.querySelector('#comment_info')

var commentor = function (e){

  e.preventDefault();
  
  var comment = document.createElement('li');
  comment.className = "collection-item";
  var random = Math.random();   //for testing only
  comment.innerHTML = "<div class='card'> <span class='card-title'>"+ user.value +
  "</span> <div class='card-content'>" + userComment.value + "</div></div>";
  commentArea.prepend(comment);  //to add to the top
}

//*********************** */
  //carousel
  $(document).ready(function(){
    $('.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        dist: -100
    });

  //Govt. links - collapsibe
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });  

  //Symptoms modal - button
  $(document).ready(function(){
    $('.modal').modal();
  });

  //function for auto play carousel-slider
  setInterval(function(){
      $('.carousel-slider').carousel('next');
  },3500);
  });
//******************************/

input.addEventListener('input', datePicker);
submit.addEventListener('click',commentor);
