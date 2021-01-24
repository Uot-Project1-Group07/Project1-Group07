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
