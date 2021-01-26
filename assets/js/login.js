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

  // optional hide form after login
  loginForm.style.display = "none";
  //redirect to main page *****Conf path correct******
  window.location = ".index.html";
};

userFormEl.addEventListener("submit", formLoginHandler);
