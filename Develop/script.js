//VARIABLE DECLARTION
var currentDate = document.getElementById("currentDay");
var timeSlots = document.getElementById("containerId");

var time = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

//FETCH API

var date = document.createElement("h3");
var time = document.createElement("p");
date.textContent = moment().format("dddd, MMMM Do YYYY");
time.textContent = moment().hours();

currentDate.append(date, time);

//CREATING TIMESLOTS
function createTimeSlots() {
  for (var i = 0; i < time.length; i++) {
    var timeList = document.createElement("div");

    timeList.textContent = time[i];
    timeSlots.appendChild(timeList);
  }
}

//EVENTS
$(".saveBtn").on("click", function () {
  console.log($(this).siblings(".text").val());
  console.log($(this).parent().attr("id"));
});
//key and value to local storage

//ENTRY POINT
// createTimeSlots();
// getApi();
