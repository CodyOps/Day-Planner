//VARIABLE DECLARTION
var currentDate = document.getElementById("currentDay");
var timeSlots = document.getElementById("containerId");
var saveButton = document.getElementsByClassName(".saveBtn");

//Array for all time slots during regular business hours
var time = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

//FETCH API

//Creates the current time and date pulled from moment.js
var date = document.createElement("h3");
var time = document.createElement("p");
date.textContent = moment().format("dddd, MMMM Do YYYY");
time.textContent = moment().hours() + ":" + moment().minute();

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
$(document).ready(function () {
  $(".text").text = localStorage.getItem(eventTime, eventText);
  //after the document is loaded, check local storage for any saved key value pairs and load it into the textArea for the user
  $(".saveBtn").on("click", function () {
    //run the function after the user clicks a save button
    console.log($(this).siblings(".text").val());
    console.log($(this).parent().attr("id"));

    var eventText = $(this).siblings(".text").val();
    var eventTime = $(this).parent().attr("id");

    if (eventText === "") {
      alert("Event text cannot be blank");
    } else {
      alert("Event Saved");
    }
    console.log(eventTime, eventText);
    localStorage.setItem(eventTime, eventText);

    $(this).siblings(".text").text = localStorage.getItem(eventText);
  });
});
//ENTRY POINT
// createTimeSlots();
// getApi();
// saveEvent();
