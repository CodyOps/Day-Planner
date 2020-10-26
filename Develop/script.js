//VARIABLE DECLARTION
var currentDate = document.getElementById("currentDay");
var timeSlots = document.getElementById("containerId");
var saveButton = document.getElementsByClassName(".saveBtn");

//Array for all time slots during regular business hours
var time = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

//Creates the current time and date pulled from moment.js
var date = document.createElement("h3");
var time = document.createElement("p");
date.textContent = moment().format("dddd, MMMM Do YYYY");
time.textContent = moment().hours() + ":" + moment().minute();

currentDate.append(date, time);

//EVENTS

$(document).ready(function () {
  //creates a variable to go to local storage and grab the key and value
  $("#9text").val(localStorage.getItem("9am"));
  $("#10text").val(localStorage.getItem("10am"));
  $("#11text").val(localStorage.getItem("11am"));
  $("#12text").val(localStorage.getItem("12am"));
  $("#1text").val(localStorage.getItem("1pm"));
  $("#2text").val(localStorage.getItem("2pm"));
  $("#3text").val(localStorage.getItem("3pm"));
  $("#4text").val(localStorage.getItem("4pm"));
  $("#5text").val(localStorage.getItem("5pm"));

  if (time.textContent < date.value) {
    textArea.setAttribute = ".past";
  } else if (time > date.value) {
    textArea.setAttribute = ".future";
  }

  $(".saveBtn").on("click", function () {
    //run the function after the user clicks a save button
    // console.log($(this).siblings(".text").val());
    // console.log($(this).parent().attr("id"));

    var eventText = $(this).siblings(".text").val();
    var eventTime = $(this).parent().attr("id");

    if (eventText === "") {
      alert("Event text cannot be blank");
    } else {
      alert("Event Saved");
    }
    console.log(eventTime, eventText);
    localStorage.setItem(eventTime, eventText);
    // localStorage.setItem("eTime", JSON.stringify(eventTime));
  });
});
//ENTRY POINT

// createTimeSlots();
// getApi();
// saveEvent();
