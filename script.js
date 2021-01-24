
//The area where the data is formed
var dateArea = document.querySelector("#dates_info");  //ul element

const input = document.querySelector('input');  //date picker element

var log = []; //to get and use the date


var dates = function (){
    //passing the date so we can generate the dates according to the date given
    console.log(log.length);

    var dataCitation = document.createElement('p');


    //can I make an image pop out
    var covidProImage = document.createElement("img");
    covidProImage.setAttribute('text-align','center');  //center aligning not working for the image
    covidProImage.setAttribute('width','45%');
    covidProImage.setAttribute('src','./images/progression-of-covid-19.webp');
    covidProImage.setAttribute('alt','');   // for proper coding form
    dateArea.appendChild(covidProImage);
    //source
    var covidProImageSource = document.createElement("p");
    covidProImageSource.textContent = "Source: CBC News";
    dateArea.appendChild(covidProImageSource);

    var day1 = document.createElement("li");
    day1.setAttribute('list-style-type','none');       //NOT working
    day1.innerHTML = "<h5><b>"+ "Day 1"+ "</b></h5>" + "<h5p>" +
        "Most of those infected – 88% – will have a fever and feel tired. Many also have muscle pain and a dry cough." + "</p>" +
        "<p>Some people, around 10% according to the study from China, experience nausea or have diarrhea in the days just before the fever begins.</p>";
    dateArea.appendChild(day1);

    var day2to4 = document.createElement("li");
    day2to4.setAttribute('list-style-type','none');        //NOT working
    day2to4.innerHTML = "<h5><b>"+ "Day 2-4"+ "</b></h5>" +   
    "<p>The average duration of fever was 12 days. Ninety-nine percent of the patients studied had a fever. About 50% felt fatigued and had a dry cough, with 33% having difficulty breathing and complaining of muscle pain.</p>";
    dateArea.appendChild(day2to4);    
    
    var day5 = document.createElement("li");
    day5.setAttribute('list-style-type','none');       //NOT working
    day5.innerHTML = "<h5><b>"+ "Day 5"+ "</b></h5>" + 
    "<p>The average duration of fever was 12 days. Ninety-nine percent of the patients studied had a fever. About 50% felt fatigued and had a dry cough, with 33% having difficulty breathing and complaining of muscle pain.</p>";
    dateArea.appendChild(day5);

    var day6 = document.createElement("li");
    day6.setAttribute('list-style-type','none');       //NOT working
    day6.innerHTML = "<h5><b>"+ "Day 6"+ "</b></h5>" + 
    "<p>Breathing difficulty, cough and fever persist. Some people describe chest tightening or having a feeling that a “band” is around their chest.</p>";
    dateArea.appendChild(day6);

    var day7 = document.createElement("li");
    day7.setAttribute('list-style-type','none');       //NOT working
    day7.innerHTML = "<h5><b>"+ "Day 7"+ "</b></h5>" + 
    "<p>Breathing difficulty, cough and fever persist. Some people describe chest tightening or having a feeling that a “band” is around their chest.</p>";
    dateArea.appendChild(day7);

    var day8 = document.createElement("li");
    day8.setAttribute('list-style-type','none');       //NOT working
    day8.innerHTML = "<h5><b>"+ "Day 8"+ "</b></h5>" + 
    "<p>Breathing difficulty, cough and fever persist. Some people describe chest tightening or having a feeling that a “band” is around their chest.</p>";
    dateArea.appendChild(day8);

    var day10 = document.createElement("li");
    day10.setAttribute('list-style-type','none');       //NOT working
    day10.innerHTML = "<h5><b>"+ "Day 10"+ "</b></h5>" + 
    "<p>Breathing difficulty, cough and fever persist. Some people describe chest tightening or having a feeling that a “band” is around their chest.</p>";
    dateArea.appendChild(day10);

    var day12 = document.createElement("li");
    day12.setAttribute('list-style-type','none');       //NOT working
    day12.innerHTML = "<h5><b>"+ "Day 12"+ "</b></h5>" + 
    "<p>Breathing difficulty, cough and fever persist. Some people describe chest tightening or having a feeling that a “band” is around their chest.</p>";
    dateArea.appendChild(day12);

    var day13to14 = document.createElement("li");
    day13to14.setAttribute('list-style-type','none');       //NOT working
    day13to14.innerHTML = "<h5><b>"+ "Day 13 to 14"+ "</b></h5>" + 
    "<p>Breathing difficulty, cough and fever persist. Some people describe chest tightening or having a feeling that a “band” is around their chest.</p>";
    dateArea.appendChild(day13to14);

    var day18 = document.createElement("li");
    day18.setAttribute('list-style-type','none');       //NOT working
    day18.innerHTML = "<h5><b>"+ "Day 18"+ "</b></h5>" + 
    "<p>Breathing difficulty, cough and fever persist. Some people describe chest tightening or having a feeling that a “band” is around their chest.</p>";
    dateArea.appendChild(day18);
};

var instructions = document.querySelector('#dateInstructions');


var datePicker = function(e){
    
    log = e.target.value;
    
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

  console.log('Submit button was clicked!');

  e.preventDefault();
  
  var comment = document.createElement('li');
  comment.className = "collection-item";
  var random = Math.random();   //for testing only
  comment.innerHTML = "<div class='card'> <span class='card-title'>"+ "Manjula" +
  "</span> <div class='card-content'>" + "What is my comment "+random + "</div></div>";
  commentArea.prepend(comment);  //to add to the top

  //console.dir(user);
  console.log('User: '+ user.value);
  console.log('User\'s comments: '+ userComment.value);
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
