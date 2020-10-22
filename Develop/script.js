//VARIABLE DECLARTION
var currentDate = document.getElementById("currentDay");
var timeSlots = document.getElementById("containerId");

var time = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

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

//CREATING TIMESLOTS
function createTimeSlots() {
  for (var i = 0; i < time.length; i++) {
    var timeList = document.createElement("div");
    timeList.textContent = time[i];
    timeSlots.appendChild(timeList);
  }
}

createTimeSlots();
//LOCAL STORAGE
// var userEvent = timeSlots.value.trim();

// localStorage.setItem("userEvent", JSON.stringify(userEvent));
