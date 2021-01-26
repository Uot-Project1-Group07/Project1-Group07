//Global variables
var userIdInputEl = document.querySelector("#userId");
var userPasswordEl = document.querySelector("#userPswd");
var userFormEl = document.querySelector("#login-form");
var userInfo = JSON.parse(localStorage.getItem("user-Info")) || [];
var loginForm = document.querySelector("#id01");

//Function to get to get user input
var formLoginHandler = function (event) {
  event.preventDefault();
  var username = userIdInputEl.value.trim();
  var userPassword = userPasswordEl.value.trim();
  //split password to indentify age group // Password format ("password-age")
  var userAge = userPassword.split("-")[1];
  //put user info into object and store to local
  var userInfoObj = { iD: username, age: userAge };
  userInfo.push(userInfoObj);
  window.localStorage.setItem("user-info", JSON.stringify(userInfo));

  //check for age and display message indicating page user will be sent to.
  if (userAge <= 12) {
    alert('You will be directed to the "Kids" page!');
  } else if (userAge >= 13 && userAge <= 19) {
    alert('You will be directed to the "Teenagers" page!');
  } else if (userAge >= 20 && userAge <= 64) {
    alert('You will be directed to the "Adults" page!');
  } else {
    alert('You will be directed to the "Seniors" page!');
  }
  // optional hide form after login
  loginForm.style.display = "none";
  //redirect to main page *****Conf path correct******
  window.location = ".index.html";
};

userFormEl.addEventListener("submit", formLoginHandler);
