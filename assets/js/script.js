//global variables
var chatformEl = document.getElementById("myForm-chat");
var chatbubbleEl = document.querySelector(".click-img");
var cancelEl = document.querySelector(".closeicon");

//display form on click of bubble
function openForm()
{
    chatformEl.style.display = "flex";
}

//hide chat form on click of close button
function closeForm()
{
    chatformEl.style.display = "none";
}

chatformEl.style.display = "none";
chatbubbleEl.addEventListener("click",openForm);
cancelEl.addEventListener("click",closeForm);