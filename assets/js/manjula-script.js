
//The area where the data is formed
var dateArea = document.querySelector("#dates_info");  //ul element

const input = document.querySelector('input');  //date picker element

var daySelected; //to get and use the date
//creating 

var genDatesFromGiven = function(){
  
  //passing the date so we can generate the dates according to the date given
  var daySplit = (daySelected.split('-'));

  //get int value ranges
  var d = new Date(parseInt(daySplit[0]), parseInt(daySplit[1])-1, parseInt(daySplit[2])); 

  var finalDate = new Date(d);

  var datesArray = [];

  for(var i=0; i<= 17; i++){    //only upto 17 because 0 is involved
    datesArray[i] = new Date(daySplit[0], daySplit[1]-1, finalDate.getDate() + i);
  }

  return datesArray;
};


var dates = function (){

    //All the generated dates are passed here
    var arrDates = genDatesFromGiven();

    //reprase the selected date and show 
    var givenDate = document.createElement('h4');
    givenDate.setAttribute('text-align','right');
    givenDate.innerHTML = "<h4 style='text-align:center'>Covid contracted date you gave was <b><span style='background-color: coral'>"+arrDates[0].toDateString()+"</span></b></h4><hr><br>";
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
    "<a href='https://www.boston25news.com/news/trending/coronavirus-how-covid-19-progresses-day-by-day-breakdown-symptoms/YRC3CCK2NFD2THIYJHT35447AU/' target='_blank'>" +
    "Link here.</a><br>" ;
    dateArea.appendChild(dataCitation);

    //Generating dates and day's possible symptom description

    var day1 = document.createElement("li");
    day1.setAttribute('list-style-type','none');       
    day1.innerHTML = "<h5 class='green'><b>"+ arrDates[0].toDateString()+ "</b></h5>" + "<h5p>" +
        "Most of those infected – 88% – will have a fever and feel tired. Many also have muscle pain and a dry cough." + "</p>" +
        "<p>Some people, around 10% according to the study from China, experience nausea or have diarrhea in the days just before the fever begins.</p>";
    dateArea.appendChild(day1);

    var day2to4 = document.createElement("li");
    day2to4.setAttribute('list-style-type','none');        
    day2to4.innerHTML = "<h5 class='green'><b>"+ arrDates[1].toDateString() + " to " + arrDates[3].toDateString()+ "</b></h5>" +   
    "<p>The fever persists as does the cough.</p>";
    dateArea.appendChild(day2to4);    
    
    var day5 = document.createElement("li");
    day5.setAttribute('list-style-type','none');       
    day5.innerHTML = "<h5 class='green'><b>"+ arrDates[4].toDateString()+ "</b></h5>" + 
    "<p>Breathing difficulty begins on day 5. It is especially likely to happen if the person has a preexisting condition or is older.</p>";
    dateArea.appendChild(day5);

    var day6 = document.createElement("li");
    day6.setAttribute('list-style-type','none');       
    day6.innerHTML = "<h5 class='green'><b>"+ arrDates[5].toDateString()+ "</b></h5>" + 
    "<p>Breathing difficulty, cough and fever persist. Some people describe chest tightening or having a feeling that a “band” is around their chest.</p>";
    dateArea.appendChild(day6);

    var day7 = document.createElement("li");
    day7.setAttribute('list-style-type','none');       
    day7.innerHTML = "<h5 class='green'><b>"+ arrDates[6].toDateString()+ "</b></h5>" + 
    "<p>It is on this day that people who have been experiencing persistent chest pain or pressure, shortness of breath and bluish lips or face are admitted to the hospital. People who are suffering less severe symptoms will likely see those symptoms begin to get better.</p>";
    dateArea.appendChild(day7);

    var day8 = document.createElement("li");
    day8.setAttribute('list-style-type','none');       
    day8.innerHTML = "<h5 class='green'><b>"+ arrDates[7].toDateString()+ "</b></h5>" + 
    "<p>According to the Chinese Center for Disease Control and Prevention, about 15% of people with COVID-19 will develop symptoms of ARDs, or acute respiratory distress syndrome. According to the Mayo Clinic, ARDs “happens when fluid builds up in the tiny, elastic air sacs (alveoli) in your lungs. The fluid keeps your lungs from filling with enough air, which means less oxygen reaches your bloodstream. This deprives your organs of the oxygen they need to function.”</p>";
    dateArea.appendChild(day8);

    var day10 = document.createElement("li");
    day10.setAttribute('list-style-type','none');       
    day10.innerHTML = "<h5 class='green'><b>"+ arrDates[9].toDateString()+ "</b></h5>" + 
    "<p>If breathing difficulties worsen, it is on this day that patients who are in the hospital will tend to enter the intensive care unit.</p>";
    dateArea.appendChild(day10);

    var day12 = document.createElement("li");
    day12.setAttribute('list-style-type','none');       
    day12.innerHTML = "<h5 class='green'><b>"+ arrDates[11].toDateString()+ "</b></h5>" + 
    "<p>In the Wuhan study, fever ended for most people on Day 12. Many still had a cough.</p>";
    dateArea.appendChild(day12);

    var day13to14 = document.createElement("li");
    day13to14.setAttribute('list-style-type','none');       
    day13to14.innerHTML = "<h5 class='green'><b>"+ arrDates[12].toDateString() + " to " + arrDates[13].toDateString() + "</b></h5>" + 
    "<p>For those who will survive the virus, breathing difficulties are generally ending on these days.</p>";
    dateArea.appendChild(day13to14);

    var day18 = document.createElement("li");
    day18.setAttribute('list-style-type','none');       
    day18.innerHTML = "<h5 class='green'><b>"+ arrDates[17].toDateString() + "</b></h5>" + 
    "<p>For those who do not survive the virus, the average number of days from onset of symptoms until death is 18 1/2 days.</p>";
    dateArea.appendChild(day18);
};

var instructions = document.querySelector('#dateInstructions');


var datePicker = function(e){
    
    //get date picked bu the user
    daySelected = e.target.value;    

    //gen date and discription
    dates();

    //removing items used to get the date from the user
    input.hidden = true;
    instructions.hidden = true;
}

//Submit button
var submit = document.querySelector("#submitButton");
//table element
var commentArea = document.querySelector("#comment_info");
//tbody
var tbody = document.querySelector("#data_info");
//form element
var formEl = document.querySelector('#form');
//All entered values go in here
var objectArraylist = [];

//Set item
var enter_comment = function(key,value){
  localStorage.setItem(key,JSON.stringify(value));
};

// to store retrived data
var retrievedList;
//Date input
var dateInput = new Date();


//*********************** */

//**     Pagination  */
//This is triggered when the page loads - once
$(document).ready(function(){
  $('#comment_info').pageMe({
    pagerSelector:'#myPager',
    activeColor: 'blue',
    prevText:'Anterior',
    nextText:'Siguiente',
    showPrevNext:true,
    hidePageNumbers:false,
    perPage:5
  });
});

//Called to recreate the pagination when we remove previous pagination
//and when new comments are added
var pagTest = function (){
  $('#comment_info').pageMe({
    pagerSelector:'#myPager',
    activeColor: 'blue',
    prevText:'Anterior',
    nextText:'Siguiente',
    showPrevNext:true,
    hidePageNumbers:false,
    perPage:5
  });
};
//***    **************   */

function commentPopulate(){  //Triggered onLoad
  //retrieve old
  retrievedList = localStorage.getItem('userComment');
  retrievedList = JSON.parse(retrievedList);

  var retrievedArrLength = retrievedList.length;
  //To retrieve older data (if available)
  var i=0;
  while(i<retrievedArrLength){
     var savedData = retrievedList.pop();
     objectArraylist.unshift(savedData);
     createComment(savedData);
     i++;
  };
};

var commentor = function (e){

  e.preventDefault();
  
    //Enter user comment to an object
    var newComment = {
      login: user.value,
      user_comment: user_2.value,
      date: dateInput.toDateString()
    };

    //Add to card and store in localStorage
    objectArraylist.unshift(newComment);
    enter_comment('userComment',objectArraylist);

    //retrieve new input
    retrievedList = localStorage.getItem('userComment');
    retrievedList = JSON.parse(retrievedList);
    createComment(retrievedList.shift());

    //Clear content from the form
    formEl.reset();
};

var newPagination = function(){

  //remove existing pagination
  document.getElementById('myPager').remove();

  //link to paginator page selector
  var pag = document.getElementById('pagLink');

  //create a new paginator element
  var newUl = document.createElement('ul');
  newUl.classList = "pagination pager";
  newUl.setAttribute('id','myPager');
  pag.appendChild(newUl);

  //call paginator (to validate data and create new buttons)
  pagTest();
};

var createComment = function(arrayComment){

  var comment = document.createElement('tr');
  //comment.className = "collection-item";
  comment.innerHTML = "<td><div class='card-panel small' style='padding: 0%; margin: 0%;'>" + 
  "<img src='./assets/icons/person.png' alt='' class='circle responsive-img' style='width: 4%; margin:1%;'> Login: "+
   "<span class='card-title' style='font-size: larger; padding-left:5%;'>"
  + arrayComment.login +
  "</span> <div class='card-content'><p style='padding-left:6.5%;'> Comment: <span style='padding-left:3%;'>" + arrayComment.user_comment + "</span></p>"+
  "<p style='text-align:right; background-color: #ffef96'>" +arrayComment.date+ "<p></div></div></td>";
  tbody.prepend(comment)
  commentArea.prepend(tbody);  //to add to the top

  //remove old and create new pagination
  newPagination();

  //so that there can't be an empty comment
  submit.disabled = true;
};

var countEntered = 0;

var entered = function (){
  //alert("entered");
  countEntered++;
  if(countEntered === 2){
    submit.disabled = false;
    countEntered = 0;
  }
};


//**************** */
  //carousel
  $(document).ready(function(){
    $('.carousel-slider').carousel({
        fullWidth: true,
        indicators: false,
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

//To unlock the submit button
user.addEventListener('input',entered);
user_2.addEventListener('input',entered);
//Triggers when the user selects a date
input.addEventListener('input', datePicker);
//Triggers when user submits a comment
submit.addEventListener('click',commentor);
