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
  // var myCoolObject = {
  //   events: [
  //     {
  //       event: "some event",
  //     },
  //     {
  //       event: "some other event",
  //     },
  //   ],
  // };
  // localStorage.setItem("allEvents", JSON.stringify(myCoolObject));
  // var retrievedObject = localStorage.getItem("allEvents");
  // console.log(retrievedObject);
  // console.log(JSON.parse(retrievedObject));
  function saveRow() {
    for (var i = 0; i < time.length; i++) {
      if (localStorage.getItem(time[i])) {
        var retrievedRow = localStorage.getItem("eText");
        text.value = JSON.parse("eText");
      }
    }
  }

  if (time < date.value) {
    textArea.setAttribute = ".past";
  } else if (time > date.value) {
    textArea.setAttribute = ".future";
  }

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
    localStorage.setItem("eText", JSON.stringify(eventText));
    localStorage.setItem("eTime", JSON.stringify(eventTime));
  });

  saveRow();
});
//ENTRY POINT

// createTimeSlots();
// getApi();
// saveEvent();
