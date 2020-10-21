//VARIABLE DECLARTION
var currentDate = document.getElementById("currentDay");

//FETCH API
function getApi() {
  // Insert the API url to get a list of your repos
  var requestUrl = "https://api.github.com/users/codyops/repos";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var timeAndDate = document.createElement("p");
      timeAndDate.textContent = data[0].html_url;
      currentDate.appendChild(timeAndDate);
    });
}

getApi();
console.log(getApi);
