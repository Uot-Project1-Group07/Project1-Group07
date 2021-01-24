
//The area where the data is formed
var dateArea = document.querySelector("#dates_info");  //ul element

const input = document.querySelector('input');  //date picker element

var log = []; //to get and use the date


var dates = function (){
    //passing the date so we can generate the dates according to the date given
    console.log(log.length);


    var day1 = document.createElement("li");
    day1.setAttribute('list-style-type','none');       //NOT working
    day1.innerHTML = "<h5>"+ "Day 1"+ "</h5>" + 
    "The first symptoms begin from two to 14 days after you have been exposed to the virus. A new study from Johns Hopkins Bloomberg School of Public Health suggests a median time of about five days.";
    dateArea.appendChild(day1);

    var day2 = document.createElement("li");
    day2.setAttribute('list-style-type','none');        //NOT working
    day2.innerHTML = "<h5>"+ "Day 2"+ "</h5>" +   
    "The average duration of fever was 12 days. Ninety-nine percent of the patients studied had a fever. About 50% felt fatigued and had a dry cough, with 33% having difficulty breathing and complaining of muscle pain.";
    dateArea.appendChild(day2);       
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
var userComment = document.querySelector("#userComments");

//Create div.card. This inside it div.card-content
var commentArea = document.querySelector('#comment_info')

var commentor = function (e){

  console.log('Submit button was clicked!');

  e.preventDefault();
  
  var comment = document.createElement('li');
  var random = Math.random();   //for testing only
  comment.innerHTML = "<div class='card'> <span class='card-title'>"+ "Manjula" +"</span>" + "<div class='card-content'>" + "What is my comment "+random + "</div></div>";
  commentArea.prepend(comment);  //to add to the top

  //console.dir(user);
  //.log('User: '+ user.value);
  //console.log('User\'s comments: '+ userComment.value);
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
